// Letter.tsx
import React from 'react';
import Letter1 from "../../images/letter1.jpg";
import Letter2 from "../../images/letter2.jpg";
import Letter3 from "../../images/letter3.jpg";
import Letter4 from "../../images/letter4.png";

const Letter: React.FC = () => {
    return (
        <div className="bg-gray-100 container mx-auto py-10">
            <div className="max-w-3xl mx-auto">
                <div className="mb-5">
                    <h2 className="text-2xl font-bold text-center mb-5">THƯ NGỎ</h2>
                    <div className="grid md:grid-cols-2 gap-6 px-4">
                        <div className="mb-5">
                            <div className="flex flex-wrap -mx-2">
                                <img src={Letter1} alt="Letter 1" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                                <img src={Letter2} alt="Letter 2" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                                <img src={Letter3} alt="Letter 3" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                                <img src={Letter4} alt="Letter 4" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Kính gửi Quý khách hàng và Đối tác!</h3>
                            <p className="mb-3 text-gray-800 text-xl">
                                Lời đầu tiên, Công Ty TNHH Vận Tải Quốc Tế Trường Hưng gửi đến Quý khách hàng lời chúc sức khỏe, thành công và hạnh phúc!
                            </p>
                            <p className="mb-3 text-gray-800 text-xl">
                                Công Ty TNHH Vận Tải Quốc Tế Trường Hưng được thành lập vào ngày 25/12/2014. Trải qua gần 9 năm hoạt động và phát triển, Trường Hưng đang vươn mình trở thành một trong những doanh nghiệp hàng đầu về lĩnh vực vận tải đường thủy nội địa, chuyên vận chuyển hàng hóa trên tất cả các khu vực trong cả nước. Hiện tại chúng tôi chuyên vận chuyển đa dạng các loại hàng hóa siêu trường, siêu trọng, sắt thép, than các loại, vật liệu xây dựng, hàng nông sản, v.v… Cam kết vận chuyển hàng hóa đến nơi an toàn, nhanh chóng và tiết kiệm chi phí nhất.
                            </p>
                            <p className="mb-3 text-gray-800 text-xl">
                                Tại Trường Hưng, Công ty chúng tôi đầu tư hệ thống phương tiện vận tải với cấp tàu VR-SB chuyên chở các sản phẩm về thép có trọng tải và công suất lớn, cùng với đội ngũ nhân viên là những cán bộ, thuyền trưởng, thuyền viên được đào tạo đúng chuyên ngành có đầy đủ văn bằng, chứng chỉ theo quy định, giàu kinh nghiệm, Trường Hưng đã và đang trở thành đối tác chiến lược của nhiều đơn vị, tập đoàn lớn tại Việt Nam.
                            </p>
                            <p className="mb-3 text-gray-800 text-xl">
                                Đối với Công Ty TNHH Vận Tải Quốc Tế Trường Hưng sự hài lòng của Quý khách hàng chính là thước đo thành công và là thành quả lao động của tập thể công ty. Trường Hưng rất mong nhận được sự quan tâm và hợp tác của Quý khách hàng & Đối tác.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Letter;
