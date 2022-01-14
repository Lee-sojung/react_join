import { useEffect, useRef } from "react";
import { useState } from "react";

function Location() {
  //윈도우 전역에 등록되어 있는 kakao 객체를 불러옴
  const { kakao } = window;
  //useRef로 #map참조
  const container = useRef(null);
  //생성된 map인스턴스가 담길 state생성
  const [map,setMap] = useState(null);
  //state에 담을 초기 정보값
  const info = [
    {
      title : "본점", 
      latlng : new kakao.maps.LatLng(37.5132313,127.0594368),
      //public폴더 안쪽의 절대경로와 이미지 주소 연결
      imgSrc : process.env.PUBLIC_URL+"/img/marker1.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    },
    {
      title : "지점1", 
      latlng : new kakao.maps.LatLng(37.507099899564444,126.75639338893572),
      imgSrc : process.env.PUBLIC_URL+"/img/marker2.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    },
    {
      title : "지점2", 
      latlng : new kakao.maps.LatLng(35.17422705914147,129.10766665201712),
      imgSrc : process.env.PUBLIC_URL+"/img/marker3.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    }
  ];

  const [mapInfo,setMapInfo] = useState(info);

  //컴포넌트 생성시
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.5132313, 127.0594368),
      level: 3
    };

    //카카오맵 생성자로부터 인스턴스 복사해서 맵 실행
    const map = new kakao.maps.Map(container.current, options);
    setMap(map);

    //마커 호출 인스턴스 (호출시 mapInfo라는 state에서 정보값 호출)
    new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: mapInfo[0].latlng, // 마커를 표시할 위치
      title : mapInfo[0].title, // 마커의 타이틀 
      image : new kakao.maps.MarkerImage(mapInfo[0].imgSrc, mapInfo[0].imgSize, mapInfo[0].imgPos)  // 마커 이미지 
    });
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

        <ul className="branch">
          {/*각각의 버튼 클릭시 mapInfo state에서 정보값  */}
          <li onClick={()=>{
            map.setCenter(mapInfo[0].latlng);
          }}>본점</li>
          <li onClick={()=>{
            map.setCenter(mapInfo[1].latlng);
          }}>지점1</li>
          <li onClick={()=>{
            map.setCenter(mapInfo[2].latlng);
          }}>지점2</li>
        </ul>
      </div>
    </main>
  )
}

export default Location;