import { load } from "@2gis/mapgl";
import { useEffect } from "react";

export const Map = () => {
  useEffect(() => {
    let map: any;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [55.31878, 25.23584],
        zoom: 13,
        key: "Your API access key",
      });
    });

    // Удаляем карту при размонтировании компонента
    return () => map && map.destroy();
  }, []);

  return <div id="map-container" style={{ width: "100%", height: "100%" }} />;
};
