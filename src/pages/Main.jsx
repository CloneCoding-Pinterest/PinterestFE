// // 핀 생성 모달 및 생성된 핀들을 띄우는 Main이자 Post 페이지
// import React from "react";

// import "../styles/final_board_styles.css";
// import Pin from "../components/Pin.js";
// import Modal from "../components/Modal";
// import PinWrapper from "./PinWrapper";
// import serverAxios from "../components/axios/server.axios";

// class Main extends React.Component {
//   // FinalBoard는 핀 생성 데이터 pins와 모달 창 보여주기 여부인 show_modal을 파라미터로 보내주는 부모 컴포넌트
//   constructor(props) {
//     super(props);

//     this.state = {
//       pins: [], // 디폴트 값으로 핀 생성 데이터는 비어있음
//       pinList: [],
//       show_modal: false, // 디폴트 값으로 모달 숨김
//     };
//   }

//   // 핀 생성
//   add_pin = (inputs) => {
//     this.setState((_state) => {
//       const new_pins = [..._state.pins];

//       new_pins.push(<Pin inputs={inputs} key={_state.pins.length} />);

//       return {
//         pins: new_pins, // pins에 새로운 데이터 넣고,
//         show_modal: false, // 모달 창 숨김
//       };
//     });
//   };

//   async componentDidMount() {
//     const pinList = await this.getPin();
//     this.setState({ pinList });
//   }

//   getPin = async () => {
//     try {
//       const res = await serverAxios
//         .get(`http://52.79.103.132/api/pin?/api/pin?page=1&count=18&target=all`);
//       return res.data.result.pinList;
//     } catch(err) {
//       console.log(err);
//     }
//   };

//   render() {
//     return (
//       <>
//         <div>
//           {/* 클릭하는 버튼 : 클릭하면 모달이 나옴 */}
//           <div className="navigation_bar">
//             {/* 핀 생성 버튼 📌 클릭하면 모달 창 보여줌 */}
//             <div
//               onClick={() => this.setState({ show_modal: true })}
//               className="pint_mock_icon_container add_pin"
//             >
//               <div className="pint_mock_icon">📌</div>
//             </div>
//           </div>

//           {/* 모달 - 이미지 업로드 */}
//           <div
//             onClick={(event) =>
//               event.target.className === "add_pin_modal"
//                 ? this.setState({ show_modal: false })
//                 : null
//             }
//             className="add_pin_modal_container"
//           >
//             {this.state.show_modal ? <Modal add_pin={this.add_pin} /> : null}
//           </div>

//           {/* <div className="pin_container">{this.state.pins}</div> */}

//         </div>
//         <div className="reponsible_wrapper">
//           {
//             this.state.pinList.length === 0
//             ? <h1>텅 빈 게시글입니다.</h1>
//             : <PinWrapper pinList={this.state.pinList}/>
//           }

//         </div>
//       </>
//     );
//   }
// }

// export default Main;
