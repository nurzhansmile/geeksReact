import React, { useState } from "react";
import cityList from "../../db/weather.json";
import { Button, Flex, Input } from "antd";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => {
    setCity(e.target.value);
    if(setCity===""){}
  };

  const onClick = () => {
    if (!setCity) return;
    const cityListArr = Object.keys(cityList);
    const foundCity = cityListArr.find((key) => {
      return key.toLowerCase() === city.toLowerCase();
    });
    if (foundCity) {
      setWeather(cityList[foundCity]);
      setError("");
    } else {
      setWeather("");
      setError("Нет данных");
    }
  };
  const onKeyDown = (e) => (e.key === "Enter" ? onClick() : null);

  return (
    <div>
      <Flex>
        <Input
          type="text"
          placeholder="Введите название города"
          value={city}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Button type="primary" onClick={onClick}>
          Search
        </Button>
      </Flex>

      <Flex gap="middle" align="center" justify="center">
        {weather && (
          <p>
            {weather.temp}&deg; C {weather.description} {weather.icon}{" "}
          </p>
        )}
        {error && (
        <p>{error}</p>
                )}

      </Flex>
    </div>
  );
};
