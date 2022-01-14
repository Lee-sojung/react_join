import { useEffect, useRef } from "react";

function Location() {
  //윈도우 전역에 등록되어 있는 kakao 객체를 불러옴
  const { kakao } = window;
  //useRef로 #map참조
  const container = useRef(null);

  //컴포넌트 생성시
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.5132313, 127.0594368),
      level: 1
    };

    //카카오맵 생성자로부터 인스턴스 복사해서 맵 실행
    const map = new kakao.maps.Map(container.current, options);
  }, []);

  return (
    <main className="location">
      <div className="inner">
        <h1><a href="#">Location</a></h1>

        {/* 맵이 출력될 프레임 useRef로 참조 */}
        <div id="map" ref={container}></div>
      </div>
    </main>
  )
}

export default Location;