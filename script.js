const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
choices = wrapper.querySelector(".options"),
goBtn = wrapper.querySelector(".go");
const charts_card = document.querySelector(".charts-card");

function addCountry(selectedCountry) {
    choices.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        choices.insertAdjacentHTML("beforeend", li);
    });
}

addCountry();
generateData(0);

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    choices.innerHTML = arr;
});

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});


goBtn.addEventListener("click", () => {
    if (selectBtn.firstElementChild.innerText != "Select Country" && 
        selectBtn.firstElementChild.innerText != "No Country Selected"){
        charts_card.classList.toggle("active");
        i = countries.indexOf(selectBtn.firstElementChild.innerText);
        chart.updateSeries([{
          data: [{
            x: new Date('1960-01-01').getTime(),
            y: nums[i][0]
          }, {
            x: new Date('1961-01-01').getTime(),
            y: nums[i][1]
          }, {
            x: new Date('1962-01-01').getTime(),
            y: nums[i][2]
          }, {
            x: new Date('1963-01-01').getTime(),
            y: nums[i][3]
          }, {
            x: new Date('1964-01-01').getTime(),
            y: nums[i][4]
          }, {
            x: new Date('1965-01-01').getTime(),
            y: nums[i][5]
          }, {
            x: new Date('1966-01-01').getTime(),
            y: nums[i][6]
          }, {
            x: new Date('1967-01-01').getTime(),
            y: nums[i][7]
          }, {
            x: new Date('1968-01-01').getTime(),
            y: nums[i][8]
          }, {
            x: new Date('1969-01-01').getTime(),
            y: nums[i][9]
          }, {
            x: new Date('1970-01-01').getTime(),
            y: nums[i][10]
          }, {
            x: new Date('1971-01-01').getTime(),
            y: nums[i][11]
          }, {
            x: new Date('1972-01-01').getTime(),
            y: nums[i][12]
          }, {
            x: new Date('1973-01-01').getTime(),
            y: nums[i][13]
          }, {
            x: new Date('1974-01-01').getTime(),
            y: nums[i][14]
          }, {
            x: new Date('1975-01-01').getTime(),
            y: nums[i][15]
          }, {
            x: new Date('1976-01-01').getTime(),
            y: nums[i][16]
          }, {
            x: new Date('1977-01-01').getTime(),
            y: nums[i][17]
          }, {
            x: new Date('1978-01-01').getTime(),
            y: nums[i][18]
          }, {
            x: new Date('1979-01-01').getTime(),
            y: nums[i][19]
          }, {
            x: new Date('1980-01-01').getTime(),
            y: nums[i][20]
          }, {
            x: new Date('1981-01-01').getTime(),
            y: nums[i][21]
          }, {
            x: new Date('1982-01-01').getTime(),
            y: nums[i][22]
          }, {
            x: new Date('1983-01-01').getTime(),
            y: nums[i][23]
          }, {
            x: new Date('1984-01-01').getTime(),
            y: nums[i][24]
          }, {
            x: new Date('1985-01-01').getTime(),
            y: nums[i][25]
          }, {
            x: new Date('1986-01-01').getTime(),
            y: nums[i][26]
          }, {
            x: new Date('1987-01-01').getTime(),
            y: nums[i][27]
          }, {
            x: new Date('1988-01-01').getTime(),
            y: nums[i][28]
          }, {
            x: new Date('1989-01-01').getTime(),
            y: nums[i][29]
          }, {
            x: new Date('1990-01-01').getTime(),
            y: nums[i][30]
          }, {
            x: new Date('1991-01-01').getTime(),
            y: nums[i][31]
          }, {
            x: new Date('1992-01-01').getTime(),
            y: nums[i][32]
          }, {
            x: new Date('1993-01-01').getTime(),
            y: nums[i][33]
          }, {
            x: new Date('1994-01-01').getTime(),
            y: nums[i][34]
          }, {
            x: new Date('1995-01-01').getTime(),
            y: nums[i][35]
          }, {
            x: new Date('1996-01-01').getTime(),
            y: nums[i][36]
          }, {
            x: new Date('1997-01-01').getTime(),
            y: nums[i][37]
          }, {
            x: new Date('1998-01-01').getTime(),
            y: nums[i][38]
          }, {
            x: new Date('1999-01-01').getTime(),
            y: nums[i][39]
          }, {
            x: new Date('2000-01-01').getTime(),
            y: nums[i][40]
          }, {
            x: new Date('2001-01-01').getTime(),
            y: nums[i][41]
          }, {
            x: new Date('2002-01-01').getTime(),
            y: nums[i][42]
          }, {
            x: new Date('2003-01-01').getTime(),
            y: nums[i][43]
          }, {
            x: new Date('2004-01-01').getTime(),
            y: nums[i][44]
          }, {
            x: new Date('2005-01-01').getTime(),
            y: nums[i][45]
          }, {
            x: new Date('2006-01-01').getTime(),
            y: nums[i][46]
          }, {
            x: new Date('2007-01-01').getTime(),
            y: nums[i][47]
          }, {
            x: new Date('2008-01-01').getTime(),
            y: nums[i][48]
          }, {
            x: new Date('2009-01-01').getTime(),
            y: nums[i][49]
          }, {
            x: new Date('2010-01-01').getTime(),
            y: nums[i][50]
          }, {
            x: new Date('2011-01-01').getTime(),
            y: nums[i][51]
          }, {
            x: new Date('2012-01-01').getTime(),
            y: nums[i][52]
          }, {
            x: new Date('2013-01-01').getTime(),
            y: nums[i][53]
          }, {
            x: new Date('2014-01-01').getTime(),
            y: nums[i][54]
          }, {
            x: new Date('2015-01-01').getTime(),
            y: nums[i][55]
          }, {
            x: new Date('2016-01-01').getTime(),
            y: nums[i][56]
          }, {
            x: new Date('2017-01-01').getTime(),
            y: nums[i][57]
          }, {
            x: new Date('2018-01-01').getTime(),
            y: nums[i][58]
          }, {
            x: new Date('2019-01-01').getTime(),
            y: nums[i][59]
          }, {
            x: new Date('2020-01-01').getTime(),
            y: nums[i][60]
          }, {
            x: new Date('2021-01-01').getTime(),
            y: nums[i][61]
          }, {
            x: new Date('2022-01-01').getTime(),
            y: nums[i][62]
          }, {
            x: new Date('2023-01-01').getTime(),
            y: nums[i][63]
          }, {
            x: new Date('2024-01-01').getTime(),
            y: nums[i][64]
          }, {
            x: new Date('2025-01-01').getTime(),
            y: nums[i][65]
          }, {
            x: new Date('2026-01-01').getTime(),
            y: nums[i][66]
          }, {
            x: new Date('2027-01-01').getTime(),
            y: nums[i][67]
          }, {
            x: new Date('2028-01-01').getTime(),
            y: nums[i][68]
          }, {
            x: new Date('2029-01-01').getTime(),
            y: nums[i][69]
          }, {
            x: new Date('2030-01-01').getTime(),
            y: nums[i][70]
          }, {
            x: new Date('2031-01-01').getTime(),
            y: nums[i][71]
          }]
        }]);
    } else
        selectBtn.firstElementChild.innerText = "No Country Selected";
});

function generateData(i){
  var options = {
    series: [{
        name: "Population",
        data: [{
          x: new Date('1960-01-01').getTime(),
          y: nums[i][0]
        }, {
          x: new Date('1961-01-01').getTime(),
          y: nums[i][1]
        }, {
          x: new Date('1962-01-01').getTime(),
          y: nums[i][2]
        }, {
          x: new Date('1963-01-01').getTime(),
          y: nums[i][3]
        }, {
          x: new Date('1964-01-01').getTime(),
          y: nums[i][4]
        }, {
          x: new Date('1965-01-01').getTime(),
          y: nums[i][5]
        }, {
          x: new Date('1966-01-01').getTime(),
          y: nums[i][6]
        }, {
          x: new Date('1967-01-01').getTime(),
          y: nums[i][7]
        }, {
          x: new Date('1968-01-01').getTime(),
          y: nums[i][8]
        }, {
          x: new Date('1969-01-01').getTime(),
          y: nums[i][9]
        }, {
          x: new Date('1970-01-01').getTime(),
          y: nums[i][10]
        }, {
          x: new Date('1971-01-01').getTime(),
          y: nums[i][11]
        }, {
          x: new Date('1972-01-01').getTime(),
          y: nums[i][12]
        }, {
          x: new Date('1973-01-01').getTime(),
          y: nums[i][13]
        }, {
          x: new Date('1974-01-01').getTime(),
          y: nums[i][14]
        }, {
          x: new Date('1975-01-01').getTime(),
          y: nums[i][15]
        }, {
          x: new Date('1976-01-01').getTime(),
          y: nums[i][16]
        }, {
          x: new Date('1977-01-01').getTime(),
          y: nums[i][17]
        }, {
          x: new Date('1978-01-01').getTime(),
          y: nums[i][18]
        }, {
          x: new Date('1979-01-01').getTime(),
          y: nums[i][19]
        }, {
          x: new Date('1980-01-01').getTime(),
          y: nums[i][20]
        }, {
          x: new Date('1981-01-01').getTime(),
          y: nums[i][21]
        }, {
          x: new Date('1982-01-01').getTime(),
          y: nums[i][22]
        }, {
          x: new Date('1983-01-01').getTime(),
          y: nums[i][23]
        }, {
          x: new Date('1984-01-01').getTime(),
          y: nums[i][24]
        }, {
          x: new Date('1985-01-01').getTime(),
          y: nums[i][25]
        }, {
          x: new Date('1986-01-01').getTime(),
          y: nums[i][26]
        }, {
          x: new Date('1987-01-01').getTime(),
          y: nums[i][27]
        }, {
          x: new Date('1988-01-01').getTime(),
          y: nums[i][28]
        }, {
          x: new Date('1989-01-01').getTime(),
          y: nums[i][29]
        }, {
          x: new Date('1990-01-01').getTime(),
          y: nums[i][30]
        }, {
          x: new Date('1991-01-01').getTime(),
          y: nums[i][31]
        }, {
          x: new Date('1992-01-01').getTime(),
          y: nums[i][32]
        }, {
          x: new Date('1993-01-01').getTime(),
          y: nums[i][33]
        }, {
          x: new Date('1994-01-01').getTime(),
          y: nums[i][34]
        }, {
          x: new Date('1995-01-01').getTime(),
          y: nums[i][35]
        }, {
          x: new Date('1996-01-01').getTime(),
          y: nums[i][36]
        }, {
          x: new Date('1997-01-01').getTime(),
          y: nums[i][37]
        }, {
          x: new Date('1998-01-01').getTime(),
          y: nums[i][38]
        }, {
          x: new Date('1999-01-01').getTime(),
          y: nums[i][39]
        }, {
          x: new Date('2000-01-01').getTime(),
          y: nums[i][40]
        }, {
          x: new Date('2001-01-01').getTime(),
          y: nums[i][41]
        }, {
          x: new Date('2002-01-01').getTime(),
          y: nums[i][42]
        }, {
          x: new Date('2003-01-01').getTime(),
          y: nums[i][43]
        }, {
          x: new Date('2004-01-01').getTime(),
          y: nums[i][44]
        }, {
          x: new Date('2005-01-01').getTime(),
          y: nums[i][45]
        }, {
          x: new Date('2006-01-01').getTime(),
          y: nums[i][46]
        }, {
          x: new Date('2007-01-01').getTime(),
          y: nums[i][47]
        }, {
          x: new Date('2008-01-01').getTime(),
          y: nums[i][48]
        }, {
          x: new Date('2009-01-01').getTime(),
          y: nums[i][49]
        }, {
          x: new Date('2010-01-01').getTime(),
          y: nums[i][50]
        }, {
          x: new Date('2011-01-01').getTime(),
          y: nums[i][51]
        }, {
          x: new Date('2012-01-01').getTime(),
          y: nums[i][52]
        }, {
          x: new Date('2013-01-01').getTime(),
          y: nums[i][53]
        }, {
          x: new Date('2014-01-01').getTime(),
          y: nums[i][54]
        }, {
          x: new Date('2015-01-01').getTime(),
          y: nums[i][55]
        }, {
          x: new Date('2016-01-01').getTime(),
          y: nums[i][56]
        }, {
          x: new Date('2017-01-01').getTime(),
          y: nums[i][57]
        }, {
          x: new Date('2018-01-01').getTime(),
          y: nums[i][58]
        }, {
          x: new Date('2019-01-01').getTime(),
          y: nums[i][59]
        }, {
          x: new Date('2020-01-01').getTime(),
          y: nums[i][60]
        }, {
          x: new Date('2021-01-01').getTime(),
          y: nums[i][61]
        }, {
          x: new Date('2022-01-01').getTime(),
          y: nums[i][62]
        }, {
          x: new Date('2023-01-01').getTime(),
          y: nums[i][63]
        }, {
          x: new Date('2024-01-01').getTime(),
          y: nums[i][64]
        }, {
          x: new Date('2025-01-01').getTime(),
          y: nums[i][65]
        }, {
          x: new Date('2026-01-01').getTime(),
          y: nums[i][66]
        }, {
          x: new Date('2027-01-01').getTime(),
          y: nums[i][67]
        }, {
          x: new Date('2028-01-01').getTime(),
          y: nums[i][68]
        }, {
          x: new Date('2029-01-01').getTime(),
          y: nums[i][69]
        }, {
          x: new Date('2030-01-01').getTime(),
          y: nums[i][70]
        }, {
          x: new Date('2031-01-01').getTime(),
          y: nums[i][71]
        }]
    }],
    chart: {
        id: 'area-chart',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true
        },
        colors: ['#c910e8']
    },
    annotations: {
        yaxis: [{
            y: 30,
            borderColor: '#999',
            label: {
                show: true,
                text: 'Support',
                style: {
                color: "#fff",
                background: '#00E396'
                }
            }
        }],
        xaxis: [{
            x: new Date('1 Jan 2023').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
                show: true,
                text: 'Projected',
                style: {
                    color: "#fff",
                    background: '#775DD0',
                }
            }
        }]
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
        style: 'hollow',
    },
    xaxis: {
        type: 'datetime',
        min: new Date('01 Jan 1960').getTime(),
        tickAmount: 6,
    },
    tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
        }
    },
    colors: ['#c910e8'],
  }
      
  chart = new ApexCharts(document.querySelector("#area-chart"), options)
  chart.render()
      
      
  var resetCssClasses = function(activeEl) {
    var els = document.querySelectorAll('button')
    Array.prototype.forEach.call(els, function(el) {
        el.classList.remove('active')
    })
      
    activeEl.target.classList.add('active')
  }
}