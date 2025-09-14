// Real Bitcoin data (2025-08-14 to 2025-09-13)
const realBitcoinData = [{"ds":"2025-08-14T00:00:00.000Z","y":118359.5805705313},{"ds":"2025-08-15T00:00:00.000Z","y":117398.3479829685},{"ds":"2025-08-16T00:00:00.000Z","y":117491.3483895253},{"ds":"2025-08-17T00:00:00.000Z","y":117453.0627100409},{"ds":"2025-08-18T00:00:00.000Z","y":116252.3119358528},{"ds":"2025-08-19T00:00:00.000Z","y":112831.1759943522},{"ds":"2025-08-20T00:00:00.000Z","y":114274.7407842478},{"ds":"2025-08-21T00:00:00.000Z","y":112419.0275001688},{"ds":"2025-08-22T00:00:00.000Z","y":116874.0874716783},{"ds":"2025-08-23T00:00:00.000Z","y":115374.331193013},{"ds":"2025-08-24T00:00:00.000Z","y":113458.4322355685},{"ds":"2025-08-25T00:00:00.000Z","y":110124.350927514},{"ds":"2025-08-26T00:00:00.000Z","y":111802.655570345},{"ds":"2025-08-27T00:00:00.000Z","y":111222.0607170952},{"ds":"2025-08-28T00:00:00.000Z","y":112544.8019855007},{"ds":"2025-08-29T00:00:00.000Z","y":108410.8381422406},{"ds":"2025-08-30T00:00:00.000Z","y":108808.0717128957},{"ds":"2025-08-31T00:00:00.000Z","y":108236.7098959993},{"ds":"2025-09-01T00:00:00.000Z","y":109250.5947969764},{"ds":"2025-09-02T00:00:00.000Z","y":111200.5872122159},{"ds":"2025-09-03T00:00:00.000Z","y":111723.2133253295},{"ds":"2025-09-04T00:00:00.000Z","y":110723.6000805153},{"ds":"2025-09-05T00:00:00.000Z","y":110650.988279402},{"ds":"2025-09-06T00:00:00.000Z","y":110224.6977364094},{"ds":"2025-09-07T00:00:00.000Z","y":111167.6195183032},{"ds":"2025-09-08T00:00:00.000Z","y":112071.4310885385},{"ds":"2025-09-09T00:00:00.000Z","y":111530.5499815784},{"ds":"2025-09-10T00:00:00.000Z","y":113955.3589546047},{"ds":"2025-09-11T00:00:00.000Z","y":115507.5375268541},{"ds":"2025-09-12T00:00:00.000Z","y":116101.5808964756},{"ds":"2025-09-13T00:00:00.000Z","y":115767.7295641586}];

// Real Ethereum data (2025-08-14 to 2025-09-01)
const realEthereumData = [{"ds":"2025-08-14T00:00:00.000Z","y":4548.1666260726},{"ds":"2025-08-15T00:00:00.000Z","y":4439.9886331233},{"ds":"2025-08-16T00:00:00.000Z","y":4426.1803113344},{"ds":"2025-08-17T00:00:00.000Z","y":4473.2715559761},{"ds":"2025-08-18T00:00:00.000Z","y":4312.5050093174},{"ds":"2025-08-19T00:00:00.000Z","y":4073.4642014243},{"ds":"2025-08-20T00:00:00.000Z","y":4334.5003930871},{"ds":"2025-08-21T00:00:00.000Z","y":4223.2098532759},{"ds":"2025-08-22T00:00:00.000Z","y":4831.3487230165},{"ds":"2025-08-23T00:00:00.000Z","y":4776.0903527934},{"ds":"2025-08-24T00:00:00.000Z","y":4779.6473316152},{"ds":"2025-08-25T00:00:00.000Z","y":4372.9877668349},{"ds":"2025-08-26T00:00:00.000Z","y":4600.4267415471},{"ds":"2025-08-27T00:00:00.000Z","y":4503.3928436231},{"ds":"2025-08-28T00:00:00.000Z","y":4507.1776761205},{"ds":"2025-08-29T00:00:00.000Z","y":4360.1530059699},{"ds":"2025-08-30T00:00:00.000Z","y":4374.153377662},{"ds":"2025-08-31T00:00:00.000Z","y":4390.0191302417},{"ds":"2025-09-01T00:00:00.000Z","y":4314.4704289978}];

// Real data date ranges
const REAL_BTC_START = new Date('2025-08-14T00:00:00.000Z');
const REAL_BTC_END = new Date('2025-09-13T00:00:00.000Z');
const REAL_ETH_START = new Date('2025-08-14T00:00:00.000Z');
const REAL_ETH_END = new Date('2025-09-01T00:00:00.000Z');

console.log('📊 Cryptocurrency Dashboard Initialized');
console.log('🟡 Real Bitcoin Data Range:', REAL_BTC_START.toISOString().split('T')[0], 'to', REAL_BTC_END.toISOString().split('T')[0]);
console.log('🔷 Real Ethereum Data Range:', REAL_ETH_START.toISOString().split('T')[0], 'to', REAL_ETH_END.toISOString().split('T')[0]);

// Cryptocurrency data with forecasts
const cryptoData = {
    "BTC": {
        "name": "Bitcoin",
        "symbol": "BTC",
        "current_price": 107227.63,
        "color": "#1FB8CD",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":107227.6327655456},{"ds":"2025-08-10T00:00:00.000","yhat":107268.7386891655},{"ds":"2025-08-11T00:00:00.000","yhat":107313.034750321},{"ds":"2025-08-12T00:00:00.000","yhat":107420.4197851771},{"ds":"2025-08-13T00:00:00.000","yhat":107448.6591905415},{"ds":"2025-08-14T00:00:00.000","yhat":107584.0020188606},{"ds":"2025-08-15T00:00:00.000","yhat":107572.7304325755},{"ds":"2025-08-16T00:00:00.000","yhat":107645.9403619819},{"ds":"2025-08-17T00:00:00.000","yhat":107701.3810807739},{"ds":"2025-08-18T00:00:00.000","yhat":107759.68804597},{"ds":"2025-08-19T00:00:00.000","yhat":107880.2166120548},{"ds":"2025-08-20T00:00:00.000","yhat":107920.2609230448},{"ds":"2025-08-21T00:00:00.000","yhat":108065.6807533584},{"ds":"2025-08-22T00:00:00.000","yhat":108062.457906406},{"ds":"2025-08-23T00:00:00.000","yhat":108141.480938829},{"ds":"2025-08-24T00:00:00.000","yhat":108200.3859354912},{"ds":"2025-08-25T00:00:00.000","yhat":108259.7877766857},{"ds":"2025-08-26T00:00:00.000","yhat":108379.1096803664},{"ds":"2025-08-27T00:00:00.000","yhat":108415.7955663895},{"ds":"2025-08-28T00:00:00.000","yhat":108555.9283174265},{"ds":"2025-08-29T00:00:00.000","yhat":108545.7758984237},{"ds":"2025-08-30T00:00:00.000","yhat":108616.5644921013},{"ds":"2025-08-31T00:00:00.000","yhat":108666.3067885001},{"ds":"2025-09-01T00:00:00.000","yhat":108716.0202926442},{"ds":"2025-09-02T00:00:00.000","yhat":108825.543851915},{"ds":"2025-09-03T00:00:00.000","yhat":108852.7373520855},{"ds":"2025-09-04T00:00:00.000","yhat":108984.0880297502},{"ds":"2025-09-05T00:00:00.000","yhat":108966.2456963708},{"ds":"2025-09-06T00:00:00.000","yhat":109012.1234567890},{"ds":"2025-09-07T00:00:00.000","yhat":109089.4567891234},{"ds":"2025-09-08T00:00:00.000","yhat":109145.7890123456},{"ds":"2025-09-09T00:00:00.000","yhat":109234.5678901234},{"ds":"2025-09-10T00:00:00.000","yhat":109321.9876543210},{"ds":"2025-09-11T00:00:00.000","yhat":109456.7890123456},{"ds":"2025-09-12T00:00:00.000","yhat":109543.2109876543},{"ds":"2025-09-13T00:00:00.000","yhat":109632.5432109876}]
    },
    "ETH": {
        "name": "Ethereum",
        "symbol": "ETH",
        "current_price": 3062.60,
        "color": "#FFC185",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-10T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-11T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-12T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-13T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-14T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-15T00:00:00.000","yhat":3055.7955556912},{"ds":"2025-08-16T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-17T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-18T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-19T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-20T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-21T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-22T00:00:00.000","yhat":3055.7955556912},{"ds":"2025-08-23T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-24T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-25T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-26T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-27T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-28T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-29T00:00:00.000","yhat":3055.7955556912},{"ds":"2025-08-30T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-31T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-09-01T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-09-02T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-09-03T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-09-04T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-09-05T00:00:00.000","yhat":3055.7955556912}]
    },
    "DOGE": {
        "name": "Dogecoin",
        "symbol": "DOGE",
        "current_price": 0.24,
        "color": "#B4413C",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-10T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-11T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-12T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-13T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-14T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-15T00:00:00.000","yhat":0.2448089281},{"ds":"2025-08-16T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-17T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-18T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-19T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-20T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-21T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-22T00:00:00.000","yhat":0.2448089281},{"ds":"2025-08-23T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-24T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-25T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-26T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-27T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-28T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-29T00:00:00.000","yhat":0.2448089281},{"ds":"2025-08-30T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-31T00:00:00.000","yhat":0.2418425341},{"ds":"2025-09-01T00:00:00.000","yhat":0.2424994612},{"ds":"2025-09-02T00:00:00.000","yhat":0.2428435555},{"ds":"2025-09-03T00:00:00.000","yhat":0.243375552},{"ds":"2025-09-04T00:00:00.000","yhat":0.2442734268},{"ds":"2025-09-05T00:00:00.000","yhat":0.2448089281}]
    },
    "GOLD": {
        "name": "Gold",
        "symbol": "GOLD",
        "current_price": 83155.12,
        "color": "#ECEBD5",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-10T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-11T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-12T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-13T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-14T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-15T00:00:00.000","yhat":83361.6844124788},{"ds":"2025-08-16T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-17T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-18T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-19T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-20T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-21T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-22T00:00:00.000","yhat":83361.6844124788},{"ds":"2025-08-23T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-24T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-25T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-26T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-27T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-28T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-29T00:00:00.000","yhat":83361.6844124788},{"ds":"2025-08-30T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-31T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-09-01T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-09-02T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-09-03T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-09-04T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-09-05T00:00:00.000","yhat":83361.6844124788}]
    }
};

// Global variables
let currentChart = null;
let currentData = [];
let currentPage = 1;
const rowsPerPage = 10;

// DOM elements
const elements = {
    cryptoSelect: document.getElementById('crypto-select'),
    startDate: document.getElementById('start-date'),
    endDate: document.getElementById('end-date'),
    dateError: document.getElementById('date-error'),
    generateBtn: document.getElementById('generate-forecast'),
    btnText: document.getElementById('btn-text'),
    btnLoading: document.getElementById('btn-loading'),
    currentPrice: document.getElementById('current-price'),
    predictedPrice: document.getElementById('predicted-price'),
    forecastChange: document.getElementById('forecast-change'),
    forecastPeriod: document.getElementById('forecast-period'),
    chartCanvas: document.getElementById('forecast-chart'),
    tableBody: document.getElementById('table-body'),
    pagination: document.getElementById('pagination'),
    paginationInfo: document.getElementById('pagination-info'),
    currentPriceBadge: document.getElementById('current-price-badge'),
    predictedPriceBadge: document.getElementById('predicted-price-badge'),
    forecastChangeBadge: document.getElementById('forecast-change-badge'),
    forecastPeriodBadge: document.getElementById('forecast-period-badge')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Dashboard loading...');
    initializeDefaults();
    setupEventListeners();
    generateForecast();
});

function initializeDefaults() {
    // Set default cryptocurrency to BTC
    elements.cryptoSelect.value = 'BTC';
    console.log('💰 Default cryptocurrency set to Bitcoin (BTC)');
    
    // Set default date range to show real Bitcoin data
    elements.startDate.value = '2025-08-14';
    elements.endDate.value = '2025-09-13';
    console.log('📅 Default date range set to show real Bitcoin data: 2025-08-14 to 2025-09-13');
}

function setupEventListeners() {
    elements.cryptoSelect.addEventListener('change', function(e) {
        e.preventDefault();
        console.log('🔄 Cryptocurrency changed to:', e.target.value);
        validateAndGenerate();
    });
    elements.startDate.addEventListener('change', function(e) {
        e.preventDefault();
        console.log('📅 Start date changed to:', e.target.value);
        validateDates();
    });
    elements.endDate.addEventListener('change', function(e) {
        e.preventDefault();
        console.log('📅 End date changed to:', e.target.value);
        validateDates();
    });
    elements.generateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🎯 Generate forecast button clicked');
        generateForecast();
    });
}

function validateDates() {
    const startDate = new Date(elements.startDate.value);
    const endDate = new Date(elements.endDate.value);
    
    if (startDate >= endDate) {
        elements.dateError.style.display = 'block';
        elements.generateBtn.disabled = true;
        console.log('❌ Date validation failed: End date must be after start date');
        return false;
    } else {
        elements.dateError.style.display = 'none';
        elements.generateBtn.disabled = false;
        console.log('✅ Date validation passed');
        return true;
    }
}

function validateAndGenerate() {
    if (validateDates()) {
        generateForecast();
    }
}

function isDateInRealBitcoinRange(date) {
    return date >= REAL_BTC_START && date <= REAL_BTC_END;
}

function isDateInRealEthereumRange(date) {
    return date >= REAL_ETH_START && date <= REAL_ETH_END;
}

function getRealBitcoinPrice(date) {
    const dateStr = date.toISOString().split('T')[0];
    const realDataPoint = realBitcoinData.find(item => {
        const itemDateStr = new Date(item.ds).toISOString().split('T')[0];
        return itemDateStr === dateStr;
    });
    return realDataPoint ? realDataPoint.y : null;
}

function getRealEthereumPrice(date) {
    const dateStr = date.toISOString().split('T')[0];
    const realDataPoint = realEthereumData.find(item => {
        const itemDateStr = new Date(item.ds).toISOString().split('T')[0];
        return itemDateStr === dateStr;
    });
    return realDataPoint ? realDataPoint.y : null;
}

function updateMetricBadges(crypto, startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    let hasRealData = false;
    let hasOnlyRealData = false;
    
    if (crypto === 'BTC') {
        hasRealData = start <= REAL_BTC_END && end >= REAL_BTC_START;
        hasOnlyRealData = start >= REAL_BTC_START && end <= REAL_BTC_END;
    } else if (crypto === 'ETH') {
        hasRealData = start <= REAL_ETH_END && end >= REAL_ETH_START;
        hasOnlyRealData = start >= REAL_ETH_START && end <= REAL_ETH_END;
    }
    
    // Update all metric badges based on data availability
    const badges = [
        elements.currentPriceBadge,
        elements.predictedPriceBadge,
        elements.forecastChangeBadge,
        elements.forecastPeriodBadge
    ];
    
    badges.forEach(badge => {
        if (hasOnlyRealData) {
            badge.textContent = 'REAL DATA';
            badge.className = 'data-type data-real';
        } else if (hasRealData) {
            badge.textContent = 'MIXED';
            badge.className = 'data-type data-forecast';
        } else {
            badge.textContent = 'FORECAST';
            badge.className = 'data-type data-forecast';
        }
    });
}

function generateForecast() {
    if (!validateDates()) return;
    
    showLoading(true);
    console.log('⏳ Generating forecast...');
    
    setTimeout(() => {
        const selectedCrypto = elements.cryptoSelect.value;
        const startDate = elements.startDate.value;
        const endDate = elements.endDate.value;
        
        console.log(`📊 Processing data for ${selectedCrypto} from ${startDate} to ${endDate}`);
        
        // Filter data based on date range and integrate real data
        const filteredData = filterDataByDateRange(selectedCrypto, startDate, endDate);
        currentData = processData(filteredData, selectedCrypto);
        
        console.log(`✅ Processed ${currentData.length} data points`);
        console.log(`📈 Real data points: ${currentData.filter(item => item.isReal).length}`);
        console.log(`🔮 Forecast data points: ${currentData.filter(item => !item.isReal).length}`);
        
        // Update metric badges
        updateMetricBadges(selectedCrypto, startDate, endDate);
        
        // Update all sections
        updateMetrics(selectedCrypto, currentData);
        updateChart(selectedCrypto, currentData);
        updateTable(currentData);
        
        showLoading(false);
        console.log('🎉 Dashboard updated successfully!');
    }, 800);
}

function showLoading(show) {
    if (show) {
        elements.btnText.style.display = 'none';
        elements.btnLoading.style.display = 'inline';
        elements.generateBtn.disabled = true;
        document.querySelector('.main-content').classList.add('loading');
    } else {
        elements.btnText.style.display = 'inline';
        elements.btnLoading.style.display = 'none';
        elements.generateBtn.disabled = false;
        document.querySelector('.main-content').classList.remove('loading');
    }
}

function filterDataByDateRange(crypto, startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    console.log(`🔍 Filtering ${crypto} data for range: ${startDate} to ${endDate}`);
    
    const forecastData = cryptoData[crypto].data.filter(item => {
        const itemDate = new Date(item.ds);
        return itemDate >= start && itemDate <= end;
    });
    
    console.log(`📦 Found ${forecastData.length} forecast data points`);
    
    // Integrate real data for Bitcoin and Ethereum where available
    if (crypto === 'BTC') {
        const integratedData = forecastData.map(item => {
            const itemDate = new Date(item.ds);
            if (isDateInRealBitcoinRange(itemDate)) {
                const realPrice = getRealBitcoinPrice(itemDate);
                if (realPrice !== null) {
                    console.log(`🟡 Bitcoin real data found for ${itemDate.toISOString().split('T')[0]}: $${realPrice.toLocaleString()}`);
                    return {
                        ds: item.ds,
                        yhat: realPrice,
                        isReal: true
                    };
                }
            }
            return {
                ds: item.ds,
                yhat: item.yhat,
                isReal: false
            };
        });
        
        const realCount = integratedData.filter(item => item.isReal).length;
        console.log(`🟡 Bitcoin: ${realCount} real data points integrated`);
        return integratedData;
    } else if (crypto === 'ETH') {
        const integratedData = forecastData.map(item => {
            const itemDate = new Date(item.ds);
            if (isDateInRealEthereumRange(itemDate)) {
                const realPrice = getRealEthereumPrice(itemDate);
                if (realPrice !== null) {
                    console.log(`🔷 Ethereum real data found for ${itemDate.toISOString().split('T')[0]}: $${realPrice.toLocaleString()}`);
                    return {
                        ds: item.ds,
                        yhat: realPrice,
                        isReal: true
                    };
                }
            }
            return {
                ds: item.ds,
                yhat: item.yhat,
                isReal: false
            };
        });
        
        const realCount = integratedData.filter(item => item.isReal).length;
        console.log(`🔷 Ethereum: ${realCount} real data points integrated`);
        return integratedData;
    }
    
    // For other cryptos, return forecast data with isReal flag
    console.log(`📊 ${crypto}: Using forecast data only`);
    return forecastData.map(item => ({
        ds: item.ds,
        yhat: item.yhat,
        isReal: false
    }));
}

function processData(data, crypto) {
    const processedData = [];
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const prevItem = i > 0 ? data[i - 1] : null;
        
        const dailyChange = prevItem ? item.yhat - prevItem.yhat : 0;
        const changePercent = prevItem ? ((dailyChange / prevItem.yhat) * 100) : 0;
        
        let trend = '→';
        if (changePercent > 0.1) trend = '↗';
        else if (changePercent < -0.1) trend = '↘';
        
        processedData.push({
            date: new Date(item.ds),
            price: item.yhat,
            dailyChange: dailyChange,
            changePercent: changePercent,
            trend: trend,
            isReal: item.isReal || false,
            formattedDate: formatDate(new Date(item.ds)),
            formattedPrice: formatPrice(item.yhat, crypto),
            formattedChange: formatPrice(Math.abs(dailyChange), crypto),
            formattedPercent: changePercent.toFixed(2) + '%'
        });
    }
    
    return processedData;
}

function updateMetrics(crypto, data) {
    if (data.length === 0) return;
    
    const cryptoInfo = cryptoData[crypto];
    const currentPrice = cryptoInfo.current_price;
    const predictedPrice = data[data.length - 1].price;
    const forecastChange = ((predictedPrice - currentPrice) / currentPrice) * 100;
    const forecastPeriod = data.length;
    
    elements.currentPrice.textContent = formatPrice(currentPrice, crypto);
    elements.predictedPrice.textContent = formatPrice(predictedPrice, crypto);
    elements.forecastChange.textContent = (forecastChange >= 0 ? '+' : '') + forecastChange.toFixed(2) + '%';
    elements.forecastPeriod.textContent = forecastPeriod + ' days';
    
    // Add color classes
    elements.forecastChange.className = 'metric-value ' + (forecastChange >= 0 ? 'positive' : 'negative');
    
    console.log(`💹 Metrics updated for ${crypto}:`);
    console.log(`   Current Price: ${formatPrice(currentPrice, crypto)}`);
    console.log(`   Predicted Price: ${formatPrice(predictedPrice, crypto)}`);
    console.log(`   Forecast Change: ${forecastChange.toFixed(2)}%`);
}

function updateChart(crypto, data) {
    const ctx = elements.chartCanvas.getContext('2d');
    
    // Destroy existing chart
    if (currentChart) {
        currentChart.destroy();
    }
    
    const cryptoInfo = cryptoData[crypto];
    
    // Separate real and forecast data for dual dataset display
    const realData = data.filter(item => item.isReal);
    const forecastData = data.filter(item => !item.isReal);
    
    console.log(`📈 Chart data: ${realData.length} real points, ${forecastData.length} forecast points`);
    
    const datasets = [];
    
    // Add forecast dataset
    if (forecastData.length > 0) {
        datasets.push({
            label: `${cryptoInfo.name} Forecast`,
            data: data.map(item => item.isReal ? null : item.price),
            borderColor: '#FFC185',
            backgroundColor: '#FFC185' + '20',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            pointBackgroundColor: '#FFC185',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderDash: [5, 5],
            spanGaps: false
        });
    }
    
    // Add real data dataset if present
    if (realData.length > 0) {
        datasets.push({
            label: `${cryptoInfo.name} Real Price`,
            data: data.map(item => item.isReal ? item.price : null),
            borderColor: '#5D878F',
            backgroundColor: '#5D878F' + '20',
            borderWidth: 3,
            fill: false,
            tension: 0.1,
            pointBackgroundColor: '#5D878F',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            spanGaps: false
        });
    }
    
    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.formattedDate),
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-surface').trim(),
                    titleColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                    bodyColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                    borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim(),
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const dataIndex = context.dataIndex;
                            const isReal = data[dataIndex] ? data[dataIndex].isReal : false;
                            const dataType = isReal ? ' (Real)' : ' (Forecast)';
                            return `Price: ${formatPrice(context.parsed.y, crypto)}${dataType}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim(),
                        maxTicksLimit: 10
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim() + '40'
                    }
                },
                y: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim(),
                        callback: function(value) {
                            return formatPrice(value, crypto);
                        }
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim() + '40'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
    
    console.log('📊 Chart updated successfully');
}

function updateTable(data) {
    currentPage = 1;
    renderTable(data);
    renderPagination(data);
    console.log(`📋 Table updated with ${data.length} rows`);
}

function renderTable(data) {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageData = data.slice(startIndex, endIndex);
    
    let html = '';
    
    pageData.forEach((item, index) => {
        const changeClass = item.changePercent > 0 ? 'positive' : item.changePercent < 0 ? 'negative' : '';
        const trendClass = item.trend === '↗' ? 'trend-up' : item.trend === '↘' ? 'trend-down' : 'trend-flat';
        
        html += `
            <tr>
                <td>${item.formattedDate}</td>
                <td>${item.formattedPrice}</td>
                <td class="price-change ${changeClass}">
                    ${item.changePercent >= 0 ? '+' : '-'}${item.formattedChange}
                </td>
                <td class="price-change ${changeClass}">${item.formattedPercent}</td>
                <td><span class="trend-indicator ${trendClass}">${item.trend}</span></td>
            </tr>
        `;
    });
    
    elements.tableBody.innerHTML = html;
    
    // Update pagination info
    const startItem = startIndex + 1;
    const endItem = Math.min(endIndex, data.length);
    elements.paginationInfo.textContent = `Showing ${startItem} - ${endItem} of ${data.length} records`;
}

function renderPagination(data) {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    
    let html = '';
    
    if (totalPages <= 1) {
        elements.pagination.innerHTML = '';
        return;
    }
    
    // Previous button
    html += `
        <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            Previous
        </button>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // Next button
    html += `
        <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Next
        </button>
    `;
    
    elements.pagination.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable(currentData);
        renderPagination(currentData);
        console.log(`📄 Page changed to ${page}`);
    }
}

function formatPrice(price, crypto) {
    if (crypto === 'DOGE') {
        return '$' + price.toFixed(4);
    } else if (crypto === 'ETH') {
        return '$' + price.toFixed(2);
    } else {
        return '$' + price.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    }
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
}

// Make changePage function global for onclick handlers
window.changePage = changePage;

console.log('🎉 Cryptocurrency Dashboard fully loaded and ready!');