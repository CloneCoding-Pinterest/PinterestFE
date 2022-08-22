// 핀 생성 모달

import React, { useState } from 'react';

import '../../styles/modal_styles.css';

import { MdArrowCircleUp } from "react-icons/md";

function upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin) {
    if (event.target.files && event.target.files[0]) {
        if (/image\/*/.test(event.target.files[0].type)) {
            const reader = new FileReader();

            reader.onload = function () {
                setPinDetails({
                    ...pinDetails,
                    img_blob: reader.result
                });
                setShowLabel(false);
                setShowModalPin(true);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}

function check_size(event) {
    const image = event.target;

    image.classList.add('pin_max_width');

    if (
        image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
        image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height
    ) {
        image.classList.remove('pin_max_width');
        image.classList.add('pin_max_height');
    }

    image.style.opacity = 1;
}

function save_pin(pinDetails, add_pin) {
    const users_data = {
        ...pinDetails,
        author: 'Jack',
        board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        destination: document.querySelector('#pin_destination').value,
        pin_size: document.querySelector('#pin_size').value,
    }

    add_pin(users_data);
}


function Modal(props) {
    const [pinDetails, setPinDetails] = useState({
        author: '',
        board: '',
        title: '',
        description: '',
        destination: '',
        img_blob: '',
        pin_size: '',
    });
    const [showLabel, setShowLabel] = useState(true);
    const [showModalPin, setShowModalPin] = useState(false);

    return (
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="section1">
                        <div className="pint_mock_icon_container">
                            <img src="./images/ellipse.png" alt="edit" className="pint_mock_icon" />
                        </div>
                    </div>

                    <div className="section2">
                        <label htmlFor="upload_img" id="upload_img_label"
                            style={{
                                display: showLabel ? 'block' : 'none'
                            }}>
                            <div className="upload_img_container">
                                <div id="dotted_border">
                                    <div className="pint_mock_icon_container">
                                        {/* <img src="./images/up-arrow.png" alt="upload_img" className="pint_mock_icon" /> */}
                                        <MdArrowCircleUp/>
                                    </div>
                                    <div>사진을 업로드하려면 클릭</div>
                                    <div>추천 사양: 20MB 미만의 고화질 jpg</div>
                                </div>
                            </div>

                            <input onChange={event => upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin)} type="file" name="upload_img" id="upload_img" value="" />
                        </label>

                        <div className="modals_pin"
                            style={{
                                display: showModalPin ? 'block' : 'none'
                            }}>
                            <div className="pin_image">
                                <img onLoad={check_size} src={pinDetails.img_blob} alt="pin_image" />
                            </div>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="save_from_site">사이트로부터 저장</div>
                    </div>
                </div>

                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                            <select defaultValue="Select" name="pin_size" id="pin_size">
                                <option value="">사진 크기 선택</option>
                                <option value="small">작음</option>
                                <option value="medium">중간</option>
                                <option value="large">큼</option>
                            </select>
                            <div onClick={() => save_pin(pinDetails, props.add_pin)} className="save_pin">저장</div>
                        </div>
                    </div>

                    <div className="section2">
                        <input placeholder="제목을 추가하세요" type="text" className="new_pin_input" id="pin_title" />
                        <input placeholder="핀에 대한 설명을 추가하세요" type="text" className="new_pin_input" id="pin_description" />
                        <input placeholder="출처를 표기하세요" type="text" className="new_pin_input" id="pin_destination" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;