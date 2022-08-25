import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Image = styled.img`
    width: 100%;
    height: auto;
    opacity: 1;
    margin-bottom: 20px;
    transition: opacity 0.1s linear;

    :hover {
        opacity: 0.8;
    }
`;

class PinWrapper extends React.Component {

    constructor(props) {
        super();

        this.state = {
            pinList: props.pinList
        }
    }

    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry style={{gap: "30px 20px", paddingTop: '30px'}}>
                    {
                        this.state.pinList.map((v, idx) => (
                            <Link key={idx} to={`/detail/${v.pinId}`}>
                                <Image src={v.picUrl}/>
                            </Link>
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        )
    }
    
}

export default PinWrapper