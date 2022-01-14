import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";

function Location() {
  //윈도우 전역에 등록되어 있는 kakao 객체를 불러옴
  const { kakao } = window;
  //useRef로 #map참조
  const container = useRef(null);
  //생성된 map인스턴스가 담길 state생성
  const [map,setMap] = useState(null);

  //컴포넌트 생성시
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.5132313, 127.0594368),
      level: 1
    };

    //카카오맵 생성자로부터 인스턴스 복사해서 맵 실행
    const map = new kakao.maps.Map(container.current, options);

    setMap(map);
  }, []);

  return (
    <main className="location">
      <div className="inner">
        <h1><a href="#">Location</a></h1>

        {/* 맵이 출력될 프레임 useRef로 참조 */}
        <div id="map" ref={container}></div>

        <ul className="traffic">
          <li onClick={()=>{
            //버튼 클릭시 state map에 담겨있는 인스턴스로부터 기능호출
            map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
          }}>교통정보 보기</li>
          <li onClick={()=>{
            map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  
          }}>교통정보 끄기</li>
        </ul>
      </div>
    </main>
  )
}

export default Location;