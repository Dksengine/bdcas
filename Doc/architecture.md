# Architecture

## Feature

* Authentification
* Responsive layout
* MUI Design
* Mosquitto (localhost:1799)
* JSON configuration

## Configuration

* Mosquitto Server : 1799
* Alarms : [{string : {value...}...}
* PhoneNumber : "+00123456789"
* Fetching Time : 1000
* Api : https://www.callmebot.com

```json
{
  "MosquittoServer": 1799,
  "Alarms": [
    {
      "AlarmTimeoutMinLevelSump": {
        "topic": "livelli/Alarms",
        "value": 2,
        "resetTopic": "livelli/ResAlarms&",
        "resetValue": 2
      }
    },
    {
      "AlarmTimeoutOsmosis": {
        "topic": "livelli/Alarms",
        "value": 1,
        "resetTopic": "livelli/ResAlarms&",
        "resetValue": 1
      }
    },
    {
      "AlarmSumpOverflow": {
        "topic": "livelli/Alarms",
        "value": 4,
        "resetTopic": "livelli/ResAlarms&",
        "resetValue": 4
      }
    },
    {
      "AlarmTemperatureProbe1": {
        "topic": "temperature/Alarms",
        "value": 1,
        "resetTopic": "temperature/ResAlarms&",
        "resetValue": 1
      }
    },
    {
      "AlarmTemperatureProbe2": {
        "topic": "temperature/Alarms",
        "value": 2,
        "resetTopic": "temperature/ResAlarms&",
        "resetValue": 2
      }
    },
    {
      "AlarmWarmerTimeout": {
        "topic": "temperature/Alarms",
        "value": 4,
        "resetTopic": "temperature/ResAlarms&",
        "resetValue": 4
      }
    },
    {
      "AlarmChillerTimeout": {
        "topic": "temperature/Alarms",
        "value": 8,
        "resetTopic": "temperature/ResAlarms&",
        "resetValue": 8
      }
    },
    {
      "AlarmCO2Timeout": {
        "topic": "ph/Alarms",
        "value": 1,
        "resetTopic": "ph/ResAlarms&",
        "resetValue": 1
      }
    }
  ],
  "PhoneNumber": "+00123456789",
  "FetchingTime": 1000,
  "Api": "https://www.callmebot.com..."
}
```


## Frontend

For the frontend the choice is react, running on a server. The idea is using apexChart for chart library and websocket for comunicating with the backend.


## Backend
