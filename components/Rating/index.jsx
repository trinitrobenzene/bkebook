import React, { useCallback, useState } from "react";
import "./style.scss"
import { Button, Rate, Col, Row } from "antd";
import RateModal from "./RateModal";
function Rating() {

    const fakeData = [
        {
            name: 'Hirumi',
            rating: 5,
            date: '11/02/2022',
            content: 'Sword Art Online tập 10 là phần thứ hai của Alicization arc, Alicization Running. Arc này liên tục làm mình thích thú vì nó rất khác biệt so với những arc trước đó. Phần đầu của tập 10 có rất nhiều phần giải thích. Ai đó có thể coi nó là một lỗ hổng hoặc gây nhàm chán, nhưng đối với bản thân mình, mình thích những lời giải thích vì nó là nền móng của Underworld và cũng đem người đọc vào nó. Không chỉ như vậy,sau khi xây dựng thế giới, trong tập 10 này ta còn thấy trung tâm của câu chuyện và cả sự tiến bộ của Eugeo và Kirito trong Underworld. Khởi đầu thì chậm chạp nhưng khi bắt đầu tập trung thì sẽ thấy rất cuốn hút. Quá ngắn, không thể không đợi tập 11 được !'
        },
        {
            name: 'Hirumi',
            rating: 5,
            date: '11/02/2022',
            content: 'Sword Art Online tập 10 là phần thứ hai của Alicization arc, Alicization Running. Arc này liên tục làm mình thích thú vì nó rất khác biệt so với những arc trước đó. Phần đầu của tập 10 có rất nhiều phần giải thích. Ai đó có thể coi nó là một lỗ hổng hoặc gây nhàm chán, nhưng đối với bản thân mình, mình thích những lời giải thích vì nó là nền móng của Underworld và cũng đem người đọc vào nó. Không chỉ như vậy,sau khi xây dựng thế giới, trong tập 10 này ta còn thấy trung tâm của câu chuyện và cả sự tiến bộ của Eugeo và Kirito trong Underworld. Khởi đầu thì chậm chạp nhưng khi bắt đầu tập trung thì sẽ thấy rất cuốn hút. Quá ngắn, không thể không đợi tập 11 được !'
        },

    ]

    const [isRateVisible, setIsRateVisible] = useState(false);
    const handleCloseRate = useCallback(() => {
        setIsRateVisible(false);
    }, [])


    return (
    <div className="rating">
        <div className="title">ĐÁNH GIÁ</div>
        <div className="overview">
            <div className="average">4.0/5</div>
            <Button
                type="primary"
                onClick={() => setIsRateVisible(true)}
            >
                Viết đánh giá
            </Button>
            <RateModal
                isModalVisible={isRateVisible}
                onClose={handleCloseRate}
            />
        </div>
        <div className="rating-list">
            {
                fakeData.map((item, index) => (
                    <Row gutter={24} className="rating-item" key={index}>
                        <Col className="user" xs={3}>
                            <div className="name">{item.name || ""}</div>
                            <div className="date">{item.date || ""}</div>
                        </Col>

                        <Col className="rate-content" xs={21}>
                            <div className="score">
                                <Rate
                                    count={5}
                                    disabled
                                    defaultValue={item.rating || 0}
                                />
                            </div>
                            <div className="content">
                                {item.content || ""}
                            </div>
                        </Col>
                    </Row>
                ))
            }
        </div>
    </div>
    )
}
export default Rating;