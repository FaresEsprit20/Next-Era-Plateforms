import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickData,
  LineData,
  CandlestickSeries,
  LineSeries,
  Time
} from 'lightweight-charts';

@Component({
  selector: 'app-custom-trading-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toolbar" style="display:flex; gap:8px; margin-bottom:8px;">
      <select (change)="onAssetChange($any($event.target).value)">
        <option *ngFor="let s of assets" [value]="s">{{s}}</option>
      </select>
    
      <select (change)="onIntervalChange($any($event.target).value)">
        <option *ngFor="let i of intervals" [value]="i">{{i}}</option>
      </select>
    </div>
    
    <div #chartContainer style="width:100%; height:500px;"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTradingChartComponent implements AfterViewInit, OnDestroy {

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef<HTMLDivElement>;

  assets = ['AAPL', 'TSLA', 'BTCUSDT'];
  intervals = ['1m','5m','15m','1h','1d'];

  private chart!: IChartApi;
  private candleSeries!: ISeriesApi<'Candlestick'>;
  private rsiSeries!: ISeriesApi<'Line'>;
  private currentSymbol = this.assets[0];
  private currentInterval = this.intervals[0];

  ngAfterViewInit(): void {
    this.chart = createChart(this.chartContainer.nativeElement, {
      width: this.chartContainer.nativeElement.clientWidth,
      height: 500,
      layout: {
        background: { color: '#0e0e0e' },
        textColor: '#d1d4dc'
      },
      grid: {
        vertLines: { color: '#2a2e39' },
        horzLines: { color: '#2a2e39' }
      },
      timeScale: { 
        borderColor: '#2a2e39',
        timeVisible: true,
        secondsVisible: false
      }
    });

    // Candlestick series - v5 syntax
    this.candleSeries = this.chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderUpColor: '#26a69a',
      borderDownColor: '#ef5350',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350'
    });

    // RSI line series - v5 syntax
    this.rsiSeries = this.chart.addSeries(LineSeries, {
      color: '#ffa500',
      lineWidth: 2,
      priceScaleId: 'right',
      title: 'RSI(14)'
    });

    // Load default asset & timeframe
    this.loadData(this.currentSymbol, this.currentInterval);

    // Handle resize
    window.addEventListener('resize', this.handleResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize);
    if (this.chart) {
      this.chart.remove();
    }
  }

  private handleResize = () => {
    if (this.chart && this.chartContainer) {
      this.chart.applyOptions({
        width: this.chartContainer.nativeElement.clientWidth
      });
    }
  };

  onAssetChange(symbol: string) {
    this.currentSymbol = symbol;
    this.loadData(symbol, this.currentInterval);
  }

  onIntervalChange(interval: string) {
    this.currentInterval = interval;
    this.loadData(this.currentSymbol, interval);
  }

  private loadData(symbol: string, interval: string) {
    // Generate dummy candle data
    const candleData: CandlestickData[] = [];
    const now = Math.floor(Date.now() / 1000);
    
    for (let i = 0; i < 100; i++) {
      const open = 100 + Math.random() * 20;
      const close = open + Math.random() * 10 - 5;
      const high = Math.max(open, close) + Math.random() * 5;
      const low = Math.min(open, close) - Math.random() * 5;
      
      candleData.push({
        time: (now - (100 - i) * 60) as Time,
        open,
        high,
        low,
        close
      });
    }

    this.candleSeries.setData(candleData);
    this.updateRSI(candleData, 14);
  }

  private updateRSI(candleData: CandlestickData[], period: number) {
    if (candleData.length < period + 1) return;

    const rsiData: LineData[] = [];
    const closes = candleData.map(c => c.close);
    
    // Calculate initial average gain/loss
    let avgGain = 0;
    let avgLoss = 0;
    
    for (let i = 1; i <= period; i++) {
      const change = closes[i] - closes[i - 1];
      if (change > 0) {
        avgGain += change;
      } else {
        avgLoss -= change;
      }
    }
    
    avgGain /= period;
    avgLoss /= period;
    
    // Calculate RSI using Wilder's smoothing method
    for (let i = period; i < candleData.length; i++) {
      const change = closes[i] - closes[i - 1];
      let currentGain = 0;
      let currentLoss = 0;
      
      if (change > 0) {
        currentGain = change;
      } else {
        currentLoss = -change;
      }
      
      avgGain = ((avgGain * (period - 1)) + currentGain) / period;
      avgLoss = ((avgLoss * (period - 1)) + currentLoss) / period;
      
      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      const rsiValue = 100 - (100 / (1 + rs));
      
      rsiData.push({
        time: candleData[i].time,
        value: rsiValue
      });
    }

    this.rsiSeries.setData(rsiData);
  }
}