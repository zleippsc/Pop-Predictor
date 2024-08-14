from sktime.datasets import load_airline
from sktime.forecasting.base import ForecastingHorizon
from sktime.forecasting.model_selection import temporal_train_test_split
from sktime.forecasting.theta import ThetaForecaster
from sktime.performance_metrics.forecasting import mean_absolute_percentage_error
import pandas as pd
from sktime.utils.plotting import plot_series
import sys
from sklearn.metrics import mean_absolute_error, r2_score
from sktime.forecasting.arima import AutoARIMA
from sktime.forecasting.fbprophet import Prophet
import matplotlib.pyplot as plt
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
from cycler import cycler

colors = cycler(color=plt.get_cmap("tab10").colors)  # ["b", "r", "g"]

mpl.style.use("ggplot")
mpl.rcParams["figure.figsize"] = (20, 5)
mpl.rcParams["axes.facecolor"] = "white"
mpl.rcParams["axes.grid"] = True
mpl.rcParams["grid.color"] = "lightgray"
mpl.rcParams["axes.prop_cycle"] = colors
mpl.rcParams["axes.linewidth"] = 1
mpl.rcParams["xtick.color"] = "black"
mpl.rcParams["ytick.color"] = "black"
mpl.rcParams["font.size"] = 12
mpl.rcParams["figure.titlesize"] = 25
mpl.rcParams["figure.dpi"] = 100

file_path # = ENTER PATH HERE
pop_data = pd.read_csv(file_path, parse_dates=[0], index_col=[0])

# ENTER COUNTRY CODE HERE
curr_data = pop_data.iloc[4]
curr_data

curr_data.index = pd.to_datetime(curr_data.index)
forecast_df = curr_data.resample(rule="YS").sum()
forecaster = Prophet()
horizon = 10
df = curr_data
y_train = df[:-horizon]
y_test = df.tail(horizon)
forecaster.fit(y_train)
fh = ForecastingHorizon(y_test.index, is_relative=False)
y_pred = forecaster.predict(fh)
ci = forecaster.predict_interval(fh, coverage=0.9)
y_true = df.tail(horizon)
mae = mean_absolute_error(y_true, y_pred)
mai = mean_absolute_percentage_error(y_true, y_pred)
mae
mai

forecaster = Prophet()
forecaster.fit(df)
last_date = df.index.max()
fh = ForecastingHorizon(pd.date_range(str(last_date), periods=horizon, freq="YS"),is_relative=False,)
y_pred = forecaster.predict(fh)
ci = forecaster.predict_interval(fh, coverage=0.9).astype("float")

plt.plot(
            df.tail(horizon * 10),
            label="Actual",
            color="black",
        )
plt.gca().fill_between(
            ci.index, (ci.iloc[:, 0]), (ci.iloc[:, 1]), color="b", alpha=0.1
        )
plt.plot(y_pred, label="Predicted")
plt.ylim(bottom=0)
plt.legend()
plt.grid(False)
plt.show()