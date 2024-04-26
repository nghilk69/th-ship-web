// VisionMission.tsx
import React from 'react';
import VisionImage from "../../images/vision1.svg";
import MissionImage from "../../images/mission.svg";
import CoreValueImage from "../../images/core1.svg";

const VisionMission: React.FC = () => {
    return (
        <div className="bg-gray-100 container mx-auto py-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-5 uppercase">Tầm nhìn và Thế mạnh</h2>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="p-4 bg-blue-500 rounded-2xl">
                        <div className="p-4 mb-4">
                            <div className="flex items-center mb-2 pb-6 border-b-2 border-b-white">
                                <img src={VisionImage} alt="Vision" className="w-16 h-auto mr-4" />
                                <h3 className="text-3xl font-semibold text-white uppercase">Tầm nhìn</h3>
                            </div>
                            <p className="border border-gray-500 rounded-2xl p-4 text-white text-xl">Trở thành top 10 đơn vị uy tín hàng đầu tại Việt Nam trong lĩnh vực vận tải đường thủy nội địa.</p>
                        </div>
                        <div className="p-4 mb-4">
                            <div className="flex items-center mb-2 pb-6 border-b-2 border-b-white">
                                <img src={MissionImage} alt="Vision" className="w-16 h-auto mr-4" />
                                <h3 className="text-3xl font-semibold text-white uppercase">Sứ Mệnh</h3>
                            </div>
                            <p className="border border-gray-500 rounded-2xl p-4 text-white text-xl">Chúng tôi liên tục đổi mới để cung cấp đến khách hàng dịch vụ vận tải đường thủy nội địa chất lượng cao nhằm khẳng định uy tín hàng đầu.</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="p-4 mb-4">
                            <div className="flex items-center mb-2 pb-6 border-b-2 border-b-gray-600">
                                <img src={CoreValueImage} alt="Vision" className="w-16 h-auto mr-4" />
                                <h3 className="text-3xl font-semibold text-blue-500 uppercase">Giá trị cốt lõi </h3>
                            </div>
                            <p className="border border-gray-500 rounded-2xl px-4 py-6 text-gray-700 text-2xl mt-3">Sự tin cậy là nền tảng của những mối quan hệ, hợp tác bền vững. Chúng tôi không ngừng nỗ lực xây dựng và giữ gìn uy tín để có được sự tin cậy từ các khách hàng, đối tác. Đó là tài sản quý giá nhất mà chúng tôi luôn trân trọng và gìn giữ.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-4">
                        <div className="border border-gray-300 rounded-lg p-6 mb-4">
                            <div className="flex items-center mb-2">
                                <h3 className="text-3xl font-semibold text-center uppercase text-blue-500">Thế mạnh của Trường Hưng</h3>
                            </div>
                            <p className="text-gray-700 text-2xl mt-8">Tại Trường Hưng, chúng tôi chuyên nhận vận chuyển các sản phẩm về thép như: Thép phôi, thép phôi tấm, thép cuộn cán nóng, thép cuộn cán dây, thép thanh và các mặt hàng siêu trường, siêu trọng khác v.v… Phương tiện vận chuyển đều là tàu được đóng mới từ 1 đến 3 năm tuổi, cấp tàu VR-SB có trọng tải và công suất lớn. Đến với Trường Hưng khách hàng sẽ nhận được nhiều lợi ích và chất lượng hoàn hảo dịch vụ của chúng tôi gồm:</p>
                            <ul className="list-disc ml-8 text-gray-700 text-2xl">
                                <li className="mb-2"> Cam kết hàng hoá được vận chuyển an toàn, hiệu quả.</li>
                                <li className="mb-2"> Vận chuyển được nhiều hàng xa và hàng rời số lượng lớn, hàng thiết bị cồng kềnh và hàng siêu trường, siêu trọng.</li>
                                <li className="mb-2"> Đội ngũ nhân sự phục vụ chuyên nghiệp, nhiệt tình.</li>
                                <li className="mb-2"> Chi phí vận chuyển siêu tiết kiệm.</li>
                                <li className="mb-2"> Thời gian giao hàng đúng theo lịch trình.</li>
                            </ul>
                            <p className="text-gray-700 text-2xl mt-8">Để phát triển mạng lưới vận tải đường thủy của đơn vị ngày càng đa dạng và phục vụ tối đa năng suất nhu cầu vận chuyển của khách hàng, Trường Hưng đã đầu tư đóng mới 01 phương tiện thủy: Tàu Grand Family 68 trọng tải 4500,8 tấn hiện tại đã hạ thủy và dự kiến có thể đưa vào khai thác vào tháng 11/2023. Ngoài ra, Trường Hưng cũng liên kết với các đối tác đang đóng mới phương tiện thủy đủ điều kiện vận chuyển các sản phẩm thép cũng như các mặt hàng siêu trường siêu trọng khác để thuê về khai thác trong thời gian từ 5 năm trở lên. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
