const loadData = async (city) => {
    const API_KEY = '118cb9868f680824da471da7e3672515';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    return data;
}

const setInnerTextById = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
}

// display function 
const displayCurrentData = value => {
    setInnerTextById('city', value.name);
    setInnerTextById('temperature', value.main.temp);
    setInnerTextById('feels_like', value.main.feels_like);
    setInnerTextById('clouds', value.weather[0].main);
    setInnerTextById('wind', value.wind.speed);
    setInnerTextById('visibility', value.visibility);
    setInnerTextById('humidity', value.main.humidity);
}

// press the enter
document.getElementById('searchField').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const validData = getCheckValue(e.target.value);
        const searchEnterData = await loadData(validData);
        isExistValue(validData, searchEnterData);
    }
});

// default display 
const defaultShow = async () => {
    const showDataDefault = await loadData('dhaka');
    displayCurrentData(showDataDefault);
};

defaultShow();

// click by search button 
const displayData = async () => {
    document.getElementById('search-btn').addEventListener('click', async () => {
        const searchField = document.getElementById('searchField').value;
        const checkValue = getCheckValue(searchField);
        const dataDisplay = await loadData(checkValue);
        isExistValue(checkValue, dataDisplay);
    });
}

displayData();

// check the empty value 
const getCheckValue = checkValue => {
    if (checkValue === '') {
        alert('Insert the city name');
        window.location.reload();
    }
    else {
        return checkValue;
    }
}

// data is not found check 
const isExistValue = (value, obj) => {
    const errorMsg = document.getElementById('error-msg');
    const weatherStatus = document.getElementById('weather-status');
    const { name } = obj;
    const exist = value.split(" ").map(word => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

    if (name?.includes(exist)) {
        errorMsg.classList.add('d-none');
        displayCurrentData(obj);
        weatherStatus.classList.remove('d-none');
    }
    else {
        errorMsg.classList.remove('d-none');
        weatherStatus.classList.add('d-none');
    }
}