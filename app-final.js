// Real Bitcoin data (2025-08-14 to 2025-09-13) - 31 days
const realBitcoinData = [
    {"ds":"2025-08-14T00:00:00.000Z","y":118359.5805705313},
    {"ds":"2025-08-15T00:00:00.000Z","y":117398.3479829685},
    {"ds":"2025-08-16T00:00:00.000Z","y":117491.3483895253},
    {"ds":"2025-08-17T00:00:00.000Z","y":117453.0627100409},
    {"ds":"2025-08-18T00:00:00.000Z","y":116252.3119358528},
    {"ds":"2025-08-19T00:00:00.000Z","y":112831.1759943522},
    {"ds":"2025-08-20T00:00:00.000Z","y":114274.7407842478},
    {"ds":"2025-08-21T00:00:00.000Z","y":112419.0275001688},
    {"ds":"2025-08-22T00:00:00.000Z","y":116874.0874716783},
    {"ds":"2025-08-23T00:00:00.000Z","y":115374.331193013},
    {"ds":"2025-08-24T00:00:00.000Z","y":113458.4322355685},
    {"ds":"2025-08-25T00:00:00.000Z","y":110124.350927514},
    {"ds":"2025-08-26T00:00:00.000Z","y":111802.655570345},
    {"ds":"2025-08-27T00:00:00.000Z","y":111222.0607170952},
    {"ds":"2025-08-28T00:00:00.000Z","y":112544.8019855007},
    {"ds":"2025-08-29T00:00:00.000Z","y":108410.8381422406},
    {"ds":"2025-08-30T00:00:00.000Z","y":108808.0717128957},
    {"ds":"2025-08-31T00:00:00.000Z","y":108236.7098959993},
    {"ds":"2025-09-01T00:00:00.000Z","y":109250.5947969764},
    {"ds":"2025-09-02T00:00:00.000Z","y":111200.5872122159},
    {"ds":"2025-09-03T00:00:00.000Z","y":111723.2133253295},
    {"ds":"2025-09-04T00:00:00.000Z","y":110723.6000805153},
    {"ds":"2025-09-05T00:00:00.000Z","y":110650.988279402},
    {"ds":"2025-09-06T00:00:00.000Z","y":110224.6977364094},
    {"ds":"2025-09-07T00:00:00.000Z","y":111167.6195183032},
    {"ds":"2025-09-08T00:00:00.000Z","y":112071.4310885385},
    {"ds":"2025-09-09T00:00:00.000Z","y":111530.5499815784},
    {"ds":"2025-09-10T00:00:00.000Z","y":113955.3589546047},
    {"ds":"2025-09-11T00:00:00.000Z","y":115507.5375268541},
    {"ds":"2025-09-12T00:00:00.000Z","y":116101.5808964756},
    {"ds":"2025-09-13T00:00:00.000Z","y":115767.7295641586}
];

// Real Ethereum data (2025-08-14 to 2025-09-01) - 19 days
const realEthereumData = [
    {"ds":"2025-08-14T00:00:00.000Z","y":4548.1666260726},
    {"ds":"2025-08-15T00:00:00.000Z","y":4439.9886331233},
    {"ds":"2025-08-16T00:00:00.000Z","y":4426.1803113344},
    {"ds":"2025-08-17T00:00:00.000Z","y":4473.2715559761},
    {"ds":"2025-08-18T00:00:00.000Z","y":4312.5050093174},
    {"ds":"2025-08-19T00:00:00.000Z","y":4073.4642014243},
    {"ds":"2025-08-20T00:00:00.000Z","y":4334.5003930871},
    {"ds":"2025-08-21T00:00:00.000Z","y":4223.2098532759},
    {"ds":"2025-08-22T00:00:00.000Z","y":4831.3487230165},
    {"ds":"2025-08-23T00:00:00.000Z","y":4776.0903527934},
    {"ds":"2025-08-24T00:00:00.000Z","y":4779.6473316152},
    {"ds":"2025-08-25T00:00:00.000Z","y":4372.9877668349},
    {"ds":"2025-08-26T00:00:00.000Z","y":4600.4267415471},
    {"ds":"2025-08-27T00:00:00.000Z","y":4503.3928436231},
    {"ds":"2025-08-28T00:00:00.000Z","y":4507.1776761205},
    {"ds":"2025-08-29T00:00:00.000Z","y":4360.1530059699},
    {"ds":"2025-08-30T00:00:00.000Z","y":4374.153377662},
    {"ds":"2025-08-31T00:00:00.000Z","y":4390.0191302417},
    {"ds":"2025-09-01T00:00:00.000Z","y":4314.4704289978}
];

// Real data date ranges
const REAL_BITCOIN_START = new Date('2025-08-14T00:00:00.000Z');
const REAL_BITCOIN_END = new Date('2025-09-13T00:00:00.000Z');
const REAL_ETHEREUM_START = new Date('2025-08-14T00:00:00.000Z');
const REAL_ETHEREUM_END = new Date('2025-09-01T00:00:00.000Z');

// Cryptocurrency forecast data
const cryptoData = {
    "BTC": {
        "name": "Bitcoin",
        "symbol": "BTC",
        "current_price": 118359.58,
        "color": "#f7931a",
        "data": [
            {"ds":"2025-08-09T00:00:00.000","yhat":107227.6327655456},
            {"ds":"2025-08-10T00:00:00.000","yhat":107268.7386891655},
            {"ds":"2025-08-11T00:00:00.000","yhat":107313.034750321},
            {"ds":"2025-08-12T00:00:00.000","yhat":107420.4197851771},
            {"ds":"2025-08-13T00:00:00.000","yhat":107448.6591905415},
            {"ds":"2025-08-14T00:00:00.000","yhat":107584.0020188606},
            {"ds":"2025-08-15T00:00:00.000","yhat":107572.7304325755},
            {"ds":"2025-08-16T00:00:00.000","yhat":107645.9403619819},
            {"ds":"2025-08-17T00:00:00.000","yhat":107701.3810807739},
            {"ds":"2025-08-18T00:00:00.000","yhat":107759.68804597},
            {"ds":"2025-08-19T00:00:00.000","yhat":107880.2166120548},
            {"ds":"2025-08-20T00:00:00.000","yhat":107920.2609230448},
            {"ds":"2025-08-21T00:00:00.000","yhat":108065.6807533584},
            {"ds":"2025-08-22T00:00:00.000","yhat":108062.457906406},
            {"ds":"2025-08-23T00:00:00.000","yhat":108141.480938829},
            {"ds":"2025-08-24T00:00:00.000","yhat":108200.3859354912},
            {"ds":"2025-08-25T00:00:00.000","yhat":108259.7877766857},
            {"ds":"2025-08-26T00:00:00.000","yhat":108379.1096803664},
            {"ds":"2025-08-27T00:00:00.000","yhat":108415.7955663895},
            {"ds":"2025-08-28T00:00:00.000","yhat":108555.9283174265},
            {"ds":"2025-08-29T00:00:00.000","yhat":108545.7758984237},
            {"ds":"2025-08-30T00:00:00.000","yhat":108616.5644921013},
            {"ds":"2025-08-31T00:00:00.000","yhat":108666.3067885001},
            {"ds":"2025-09-01T00:00:00.000","yhat":108716.0202926442},
            {"ds":"2025-09-02T00:00:00.000","yhat":108825.543851915},
            {"ds":"2025-09-03T00:00:00.000","yhat":108852.7373520855},
            {"ds":"2025-09-04T00:00:00.000","yhat":108984.0880297502},
            {"ds":"2025-09-05T00:00:00.000","yhat":108966.2456963708},
            {"ds":"2025-09-06T00:00:00.000","yhat":109030.7863158835},
            {"ds":"2025-09-07T00:00:00.000","yhat":109076.03230201},
            {"ds":"2025-09-08T00:00:00.000","yhat":109123.2645658754},
            {"ds":"2025-09-09T00:00:00.000","yhat":109232.5346172345},
            {"ds":"2025-09-10T00:00:00.000","yhat":109261.861704233},
            {"ds":"2025-09-11T00:00:00.000","yhat":109397.8384108571},
            {"ds":"2025-09-12T00:00:00.000","yhat":109387.1669175366},
            {"ds":"2025-09-13T00:00:00.000","yhat":109461.4252211564},
            {"ds":"2025-09-14T00:00:00.000","yhat":109518.8914860335},
            {"ds":"2025-09-15T00:00:00.000","yhat":109580.7613214101}
        ]
    },
    "ETH": {
        "name": "Ethereum",
        "symbol": "ETH",
        "current_price": 4548.17,
        "color": "#627eea",
        "data": [
            {"ds":"2025-08-09T00:00:00.000","yhat":3062.6010640787},
            {"ds":"2025-08-10T00:00:00.000","yhat":3062.4501449242},
            {"ds":"2025-08-11T00:00:00.000","yhat":3061.4276760912},
            {"ds":"2025-08-12T00:00:00.000","yhat":3061.5076691885},
            {"ds":"2025-08-13T00:00:00.000","yhat":3056.8896295236},
            {"ds":"2025-08-14T00:00:00.000","yhat":3059.1890121718},
            {"ds":"2025-08-15T00:00:00.000","yhat":3055.7955556912},
            {"ds":"2025-08-16T00:00:00.000","yhat":3062.6010640787},
            {"ds":"2025-08-17T00:00:00.000","yhat":3062.4501449242},
            {"ds":"2025-08-18T00:00:00.000","yhat":3061.4276760912},
            {"ds":"2025-08-19T00:00:00.000","yhat":3061.5076691885},
            {"ds":"2025-08-20T00:00:00.000","yhat":3056.8896295236},
            {"ds":"2025-08-21T00:00:00.000","yhat":3059.1890121718},
            {"ds":"2025-08-22T00:00:00.000","yhat":3055.7955556912},
            {"ds":"2025-08-23T00:00:00.000","yhat":3062.6010640787},
            {"ds":"2025-08-24T00:00:00.000","yhat":3062.4501449242},
            {"ds":"2025-08-25T00:00:00.000","yhat":3061.4276760912},
            {"ds":"2025-08-26T00:00:00.000","yhat":3061.5076691885},
            {"ds":"2025-08-27T00:00:00.000","yhat":3056.8896295236},
            {"ds":"2025-08-28T00:00:00.000","yhat":3059.1890121718},
            {"ds":"2025-08-29T00:00:00.000","yhat":3055.7955556912},
            {"ds":"2025-08-30T00:00:00.000","yhat":3062.6010640787},
            {"ds":"2025-08-31T00:00:00.000","yhat":3062.4501449242},
            {"ds":"2025-09-01T00:00:00.000","yhat":3061.4276760912},
            {"ds":"2025-09-02T00:00:00.000","yhat":3061.5076691885},
            {"ds":"2025-09-03T00:00:00.000","yhat":3056.8896295236},
            {"ds":"2025-09-04T00:00:00.000","yhat":3059.1890121718},
            {"ds":"2025-09-05T00:00:00.000","yhat":3055.7955556912},
            {"ds":"2025-09-06T00:00:00.000","yhat":3062.6010640787},
            {"ds":"2025-09-07T00:00:00.000","yhat":3062.4501449242},
            {"ds":"2025-08-08T00:00:00.000","yhat":3061.4276760912},
            {"ds":"2025-09-09T00:00:00.000","yhat":3061.5076691885},
            {"ds":"2025-09-10T00:00:00.000","yhat":3056.8896295236},
            {"ds":"2025-09-11T00:00:00.000","yhat":3059.1890121718},
            {"ds":"2025-09-12T00:00:00.000","yhat":3055.7955556912},
            {"ds":"2025-09-13T00:00:00.000","yhat":3062.6010640787},
            {"ds":"2025-09-14T00:00:00.000","yhat":3062.4501449242},
            {"ds":"2025-09-15T00:00:00.000","yhat":3061.4276760912}
        ]
    },
    "DOGE": {
        "name": "Dogecoin",
        "symbol": "DOGE",
        "current_price": 0.24,
        "color": "#c2a633",
        "data": [
            {"ds":"2025-08-09T00:00:00.000","yhat":0.2411475515},
            {"ds":"2025-08-10T00:00:00.000","yhat":0.2418425341},
            {"ds":"2025-08-11T00:00:00.000","yhat":0.2424994612},
            {"ds":"2025-08-12T00:00:00.000","yhat":0.2428435555},
            {"ds":"2025-08-13T00:00:00.000","yhat":0.243375552},
            {"ds":"2025-08-14T00:00:00.000","yhat":0.2442734268},
            {"ds":"2025-08-15T00:00:00.000","yhat":0.2448089281},
            {"ds":"2025-08-16T00:00:00.000","yhat":0.2411475515},
            {"ds":"2025-08-17T00:00:00.000","yhat":0.2418425341},
            {"ds":"2025-08-18T00:00:00.000","yhat":0.2424994612},
            {"ds":"2025-08-19T00:00:00.000","yhat":0.2428435555},
            {"ds":"2025-08-20T00:00:00.000","yhat":0.243375552},
            {"ds":"2025-08-21T00:00:00.000","yhat":0.2442734268},
            {"ds":"2025-08-22T00:00:00.000","yhat":0.2448089281},
            {"ds":"2025-08-23T00:00:00.000","yhat":0.2411475515},
            {"ds":"2025-08-24T00:00:00.000","yhat":0.2418425341},
            {"ds":"2025-08-25T00:00:00.000","yhat":0.2424994612},
            {"ds":"2025-08-26T00:00:00.000","yhat":0.2428435555},
            {"ds":"2025-08-27T00:00:00.000","yhat":0.243375552},
            {"ds":"2025-08-28T00:00:00.000","yhat":0.2442734268},
            {"ds":"2025-08-29T00:00:00.000","yhat":0.2448089281},
            {"ds":"2025-08-30T00:00:00.000","yhat":0.2411475515},
            {"ds":"2025-08-31T00:00:00.000","yhat":0.2418425341},
            {"ds":"2025-09-01T00:00:00.000","yhat":0.2424994612},
            {"ds":"2025-09-02T00:00:00.000","yhat":0.2428435555},
            {"ds":"2025-09-03T00:00:00.000","yhat":0.243375552},
            {"ds":"2025-09-04T00:00:00.000","yhat":0.2442734268},
            {"ds":"2025-09-05T00:00:00.000","yhat":0.2448089281}
        ]
    },
    "GOLD": {
        "name": "Gold",
        "symbol": "GOLD",
        "current_price": 83155.12,
        "color": "#ffd700",
        "data": [
            {"ds":"2025-08-09T00:00:00.000","yhat":83155.1218602679},
            {"ds":"2025-08-10T00:00:00.000","yhat":83146.1431563555},
            {"ds":"2025-08-11T00:00:00.000","yhat":83231.7849610329},
            {"ds":"2025-08-12T00:00:00.000","yhat":83249.4065334721},
            {"ds":"2025-08-13T00:00:00.000","yhat":83273.2843494916},
            {"ds":"2025-08-14T00:00:00.000","yhat":83309.9239946405},
            {"ds":"2025-08-15T00:00:00.000","yhat":83361.6844124788},
            {"ds":"2025-08-16T00:00:00.000","yhat":83155.1218602679},
            {"ds":"2025-08-17T00:00:00.000","yhat":83146.1431563555},
            {"ds":"2025-08-18T00:00:00.000","yhat":83231.7849610329},
            {"ds":"2025-08-19T00:00:00.000","yhat":83249.4065334721},
            {"ds":"2025-08-20T00:00:00.000","yhat":83273.2843494916},
            {"ds":"2025-08-21T00:00:00.000","yhat":83309.9239946405},
            {"ds":"2025-08-22T00:00:00.000","yhat":83361.6844124788},
            {"ds":"2025-08-23T00:00:00.000","yhat":83155.1218602679},
            {"ds":"2025-08-24T00:00:00.000","yhat":83146.1431563555},
            {"ds":"2025-08-25T00:00:00.000","yhat":83231.7849610329},
            {"ds":"2025-08-26T00:00:00.000","yhat":83249.4065334721},
            {"ds":"2025-08-27T00:00:00.000","yhat":83273.2843494916},
            {"ds":"2025-08-28T00:00:00.000","yhat":83309.9239946405},
            {"ds":"2025-08-29T00:00:00.000","yhat":83361.6844124788},
            {"ds":"2025-08-30T00:00:00.000","yhat":83155.1218602679},
            {"ds":"2025-08-31T00:00:00.000","yhat":83146.1431563555},
            {"ds":"2025-09-01T00:00:00.000","yhat":83231.7849610329}
        ]
    }
};

class CryptoDashboard {
    constructor() {
        this.chart = null;
        this.currentCrypto = 'BTC';
        this.currentData = [];
        this.init();
    }

    init() {
        this.setInitialDates();
        this.bindEvents();
        this.updateDashboard();
    }

    setInitialDates() {
        const startDateInput = document.getElementById('start-date');
        const endDateInput = document.getElementById('end-date');
        
        // Set default date range to show real data
        startDateInput.value = '2025-08-14';
        endDateInput.value = '2025-09-05';
    }

    bindEvents() {
        const cryptoSelect = document.getElementById('crypto-select');
        const startDateInput = document.getElementById('start-date');
        const endDateInput = document.getElementById('end-date');
        const forecastBtn = document.getElementById('forecast-btn');

        cryptoSelect.addEventListener('change', (e) => {
            this.currentCrypto = e.target.value;
            console.log('🔄 Selected crypto:', this.currentCrypto);
            this.updateDashboard();
        });

        startDateInput.addEventListener('change', () => {
            this.validateAndUpdate();
        });

        endDateInput.addEventListener('change', () => {
            this.validateAndUpdate();
        });

        forecastBtn.addEventListener('click', () => {
            this.generateForecast();
        });
    }

    validateAndUpdate() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const errorDiv = document.getElementById('date-error');

        if (startDate && endDate && startDate >= endDate) {
            errorDiv.style.display = 'block';
            return false;
        } else {
            errorDiv.style.display = 'none';
            this.updateDashboard();
            return true;
        }
    }

    getRealDataForCrypto(crypto) {
        console.log('📊 Getting real data for:', crypto);
        switch(crypto) {
            case 'BTC':
                console.log('✅ Bitcoin real data loaded:', realBitcoinData.length, 'entries');
                console.log('📅 Bitcoin date range: 2025-08-14 to 2025-09-13');
                console.log('💰 Sample Bitcoin prices:', realBitcoinData.slice(0, 3).map(d => ({date: d.ds.split('T')[0], price: d.y})));
                return realBitcoinData;
            case 'ETH':
                console.log('✅ Ethereum real data loaded:', realEthereumData.length, 'entries');
                console.log('📅 Ethereum date range: 2025-08-14 to 2025-09-01');
                console.log('💰 Sample Ethereum prices:', realEthereumData.slice(0, 3).map(d => ({date: d.ds.split('T')[0], price: d.y})));
                return realEthereumData;
            default:
                console.log('❌ No real data available for:', crypto);
                return [];
        }
    }

    getRealDataRange(crypto) {
        const ranges = {
            'BTC': { start: REAL_BITCOIN_START, end: REAL_BITCOIN_END },
            'ETH': { start: REAL_ETHEREUM_START, end: REAL_ETHEREUM_END }
        };
        
        if (ranges[crypto]) {
            console.log(`📈 ${crypto} real data range:`, 
                ranges[crypto].start.toISOString().split('T')[0], 
                'to', 
                ranges[crypto].end.toISOString().split('T')[0]
            );
        }
        
        return ranges[crypto] || null;
    }

    isDateInRealRange(dateStr, crypto) {
        const realRange = this.getRealDataRange(crypto);
        if (!realRange) return false;
        
        const date = new Date(dateStr + 'T00:00:00.000Z');
        const isInRange = date >= realRange.start && date <= realRange.end;
        
        if (isInRange) {
            console.log(`✅ Date ${dateStr} is in ${crypto} real data range`);
        } else {
            console.log(`❌ Date ${dateStr} is NOT in ${crypto} real data range`);
        }
        
        return isInRange;
    }

    mergeDataWithReal(forecastData, realData, startDate, endDate) {
        console.log('🔄 === DATA MERGE START ===');
        console.log('📊 Input data:', {
            crypto: this.currentCrypto,
            forecastEntries: forecastData.length,
            realEntries: realData.length,
            dateRange: `${startDate} to ${endDate}`
        });

        const start = new Date(startDate + 'T00:00:00.000Z');
        const end = new Date(endDate + 'T00:00:00.000Z');
        const result = [];
        
        // Create a map of real data by date key (YYYY-MM-DD format)
        const realDataMap = new Map();
        realData.forEach(item => {
            const dateKey = item.ds.split('T')[0]; // Extract YYYY-MM-DD
            realDataMap.set(dateKey, item.y); // Note: real data uses 'y' field
            console.log(`📍 Real data mapped: ${dateKey} = $${item.y.toLocaleString()}`);
        });
        
        console.log('🗺️  Real data map created with', realDataMap.size, 'entries');
        
        // Process each forecast data point
        let realCount = 0;
        let forecastCount = 0;
        
        forecastData.forEach(item => {
            const itemDate = new Date(item.ds);
            const dateKey = item.ds.split('T')[0]; // Extract YYYY-MM-DD
            
            // Check if date is within selected range
            if (itemDate >= start && itemDate <= end) {
                if (realDataMap.has(dateKey)) {
                    // Use real data (prioritize over forecast)
                    const realPrice = realDataMap.get(dateKey);
                    result.push({
                        ds: item.ds,
                        yhat: realPrice, // Use real price
                        isReal: true
                    });
                    realCount++;
                    console.log(`🟢 REAL: ${dateKey} = $${realPrice.toLocaleString()}`);
                } else {
                    // Use forecast data
                    result.push({
                        ds: item.ds,
                        yhat: item.yhat, // Use forecast price
                        isReal: false
                    });
                    forecastCount++;
                    console.log(`🔵 FORECAST: ${dateKey} = $${item.yhat.toLocaleString()}`);
                }
            }
        });
        
        console.log('🎯 === DATA MERGE COMPLETE ===');
        console.log('📊 Final result:', {
            totalEntries: result.length,
            realEntries: realCount,
            forecastEntries: forecastCount,
            dataType: realCount > 0 ? (forecastCount > 0 ? 'MIXED' : 'REAL_ONLY') : 'FORECAST_ONLY'
        });
        
        // Show first few merged results
        console.log('📋 First 3 merged entries:');
        result.slice(0, 3).forEach(entry => {
            const type = entry.isReal ? 'REAL' : 'FORECAST';
            console.log(`   ${entry.ds.split('T')[0]}: $${entry.yhat.toLocaleString()} (${type})`);
        });
        
        return result;
    }

    updateDashboard() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (!startDate || !endDate) return;

        console.log('🚀 === DASHBOARD UPDATE START ===');
        console.log('⚙️  Update params:', {
            crypto: this.currentCrypto,
            dateRange: `${startDate} to ${endDate}`
        });

        const cryptoInfo = cryptoData[this.currentCrypto];
        const realData = this.getRealDataForCrypto(this.currentCrypto);
        
        // Merge forecast data with real data
        this.currentData = this.mergeDataWithReal(
            cryptoInfo.data, 
            realData, 
            startDate, 
            endDate
        );

        console.log('📈 Dashboard data ready:', this.currentData.length, 'entries');

        this.updateMetrics();
        this.updateChart();
        this.updateDataCoverage();
        
        console.log('✅ === DASHBOARD UPDATE COMPLETE ===\n');
    }

    updateMetrics() {
        const cryptoInfo = cryptoData[this.currentCrypto];
        const data = this.currentData;
        
        if (data.length === 0) return;

        const currentPrice = data[0].yhat;
        const predictedPrice = data[data.length - 1].yhat;
        const changePercent = ((predictedPrice - currentPrice) / currentPrice) * 100;
        const period = data.length;

        console.log('📊 Metrics update:', {
            current: `$${currentPrice.toLocaleString()}`,
            predicted: `$${predictedPrice.toLocaleString()}`,
            change: `${changePercent.toFixed(2)}%`,
            period: `${period} days`,
            firstDataType: data[0].isReal ? 'REAL' : 'FORECAST',
            lastDataType: data[data.length - 1].isReal ? 'REAL' : 'FORECAST'
        });

        // Update metric values
        document.getElementById('current-price').textContent = this.formatPrice(currentPrice);
        document.getElementById('predicted-price').textContent = this.formatPrice(predictedPrice);
        document.getElementById('forecast-change').textContent = 
            `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
        document.getElementById('forecast-period').textContent = `${period} day${period !== 1 ? 's' : ''}`;

        // Update badges based on data types
        const firstDataType = data[0].isReal ? 'real-data' : 'forecast';
        const lastDataType = data[data.length - 1].isReal ? 'real-data' : 'forecast';
        const hasRealData = data.some(item => item.isReal);
        const hasForecastData = data.some(item => !item.isReal);
        
        this.updateBadge('current-price-badge', firstDataType);
        this.updateBadge('predicted-price-badge', lastDataType);
        
        if (hasRealData && hasForecastData) {
            this.updateBadge('forecast-change-badge', 'mixed-data');
            this.updateBadge('forecast-period-badge', 'mixed-data');
        } else if (hasRealData) {
            this.updateBadge('forecast-change-badge', 'real-data');
            this.updateBadge('forecast-period-badge', 'real-data');
        } else {
            this.updateBadge('forecast-change-badge', 'forecast');
            this.updateBadge('forecast-period-badge', 'forecast');
        }

        // Update change color
        const changeElement = document.getElementById('forecast-change');
        changeElement.className = 'metric-value ' + (changePercent >= 0 ? 'positive' : 'negative');
    }

    updateBadge(elementId, type) {
        const badge = document.getElementById(elementId);
        badge.className = 'data-badge ' + type;
        
        switch(type) {
            case 'real-data':
                badge.textContent = 'Real Data';
                break;
            case 'forecast':
                badge.textContent = 'Forecasted';
                break;
            case 'mixed-data':
                badge.textContent = 'Real + Forecast';
                break;
        }
    }

    updateChart() {
        const ctx = document.getElementById('price-chart').getContext('2d');
        const cryptoInfo = cryptoData[this.currentCrypto];
        const data = this.currentData;

        if (this.chart) {
            this.chart.destroy();
        }

        if (data.length === 0) return;

        console.log('📈 Chart update for:', this.currentCrypto, 'with', data.length, 'data points');

        // Separate real and forecast data for different visual representation
        const realData = data.filter(item => item.isReal);
        const forecastData = data.filter(item => !item.isReal);

        console.log('📊 Chart data breakdown:', {
            real: realData.length,
            forecast: forecastData.length
        });

        const datasets = [];

        // Real data dataset (solid green line)
        if (realData.length > 0) {
            datasets.push({
                label: `${cryptoInfo.name} (Real Data)`,
                data: realData.map(item => ({
                    x: new Date(item.ds).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    y: item.yhat
                })),
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                fill: false,
                pointRadius: 6,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                tension: 0.4
            });
            console.log('✅ Real data chart series added');
        }

        // Forecast data dataset (dashed blue line)
        if (forecastData.length > 0) {
            datasets.push({
                label: `${cryptoInfo.name} (Forecast)`,
                data: forecastData.map(item => ({
                    x: new Date(item.ds).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    y: item.yhat
                })),
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                borderDash: [8, 4],
                fill: false,
                pointRadius: 4,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                tension: 0.4
            });
            console.log('✅ Forecast data chart series added');
        }

        // Update chart badge
        const hasRealData = realData.length > 0;
        const hasForecastData = forecastData.length > 0;
        let chartBadgeType = 'forecast';
        
        if (hasRealData && hasForecastData) {
            chartBadgeType = 'mixed-data';
        } else if (hasRealData) {
            chartBadgeType = 'real-data';
        }
        
        this.updateBadge('chart-badge', chartBadgeType);
        console.log('🏷️  Chart badge set to:', chartBadgeType);

        // Create the chart
        this.chart = new Chart(ctx, {
            type: 'line',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#f8fafc',
                            font: { size: 12 },
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        titleColor: '#f8fafc',
                        bodyColor: '#f8fafc',
                        borderColor: '#475569',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: true,
                        callbacks: {
                            label: (context) => {
                                const dataPoint = data.find(item => 
                                    new Date(item.ds).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) === context.label
                                );
                                const dataType = dataPoint?.isReal ? '🟢 Real' : '🔵 Forecast';
                                return `${dataType}: ${this.formatPrice(context.parsed.y)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'category',
                        grid: {
                            color: 'rgba(71, 85, 105, 0.3)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#cbd5e1',
                            font: { size: 11 },
                            maxRotation: 45
                        }
                    },
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(71, 85, 105, 0.3)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#cbd5e1',
                            font: { size: 11 },
                            callback: (value) => this.formatPrice(value, true)
                        }
                    }
                }
            }
        });
        
        console.log('🎨 Chart rendered successfully');
    }

    updateDataCoverage() {
        const coverageDiv = document.getElementById('coverage-details');
        const realRange = this.getRealDataRange(this.currentCrypto);
        
        if (!realRange) {
            coverageDiv.innerHTML = '<p class="coverage-forecast">Only forecasted data available</p>';
            return;
        }
        
        const formatDate = (date) => date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
        
        const realDataCount = this.currentData.filter(d => d.isReal).length;
        const forecastDataCount = this.currentData.filter(d => !d.isReal).length;
        
        coverageDiv.innerHTML = `
            <p class="coverage-real">Real Data: ${formatDate(realRange.start)} - ${formatDate(realRange.end)} (${realDataCount} days)</p>
            <p class="coverage-forecast">Forecasted: All other dates (${forecastDataCount} days)</p>
        `;
    }

    async generateForecast() {
        if (!this.validateAndUpdate()) return;
        
        this.showLoading();
        
        try {
            // Simulate processing time
            await new Promise(resolve => setTimeout(resolve, 1500));
            this.updateDashboard();
            this.showSuccess();
        } catch (error) {
            console.error('Error generating forecast:', error);
        } finally {
            this.hideLoading();
        }
    }

    showLoading() {
        const btn = document.getElementById('forecast-btn');
        const overlay = document.getElementById('loading-overlay');
        
        btn.classList.add('loading');
        btn.disabled = true;
        overlay.classList.remove('hidden');
    }

    hideLoading() {
        const btn = document.getElementById('forecast-btn');
        const overlay = document.getElementById('loading-overlay');
        
        btn.classList.remove('loading');
        btn.disabled = false;
        overlay.classList.add('hidden');
    }

    showSuccess() {
        // Add fade-in animation to updated elements
        const elements = document.querySelectorAll('.metric-card, .chart-section');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.classList.remove('fade-in');
            element.offsetHeight; // Force reflow
            element.classList.add('fade-in');
        });
    }

    formatPrice(price, compact = false) {
        const symbol = this.currentCrypto;
        let currency = '$';
        let decimals = 2;

        if (symbol === 'DOGE') {
            decimals = 4;
        } else if (symbol === 'GOLD') {
            currency = '₹';
            decimals = 0;
        } else if (price > 1000) {
            decimals = 0;
        }

        const formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
            notation: compact && price > 10000 ? 'compact' : 'standard'
        });

        return `${currency}${formatter.format(price)}`;
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Crypto Dashboard Initializing...');
    console.log('📊 Available real data:');
    console.log('   • Bitcoin:', realBitcoinData.length, 'entries (2025-08-14 to 2025-09-13)');
    console.log('   • Ethereum:', realEthereumData.length, 'entries (2025-08-14 to 2025-09-01)');
    
    new CryptoDashboard();
    console.log('✅ Dashboard initialized successfully');
});