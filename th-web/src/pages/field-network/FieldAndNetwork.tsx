import React from "react";
import GR56 from "../../images/gr-56-1.png";
import Field1 from "../../images/field1.jpg"
import Field2 from "../../images/field2.png"
import Field3 from "../../images/field3.jpg"
import Field4 from "../../images/field4.jpg"
import Field5 from "../../images/field5.jpg"
import Field6 from "../../images/field6.jpg"


// @ts-ignore
const FieldCard = ({ image, title, detail }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-sm">
            <div className="p-4 flex flex-col items-center">
                <div className="mb-4">
                    <img
                        src={image}
                        alt="placeholder"
                        className="w-full h-48 object-cover rounded-img-letter"
                    />
                </div>
                <div>
                    <p className="text-lg">
                        <span className="font-bold">{title}</span> {detail}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FieldAndNetwork = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">Lĩnh vực hoạt động</h1>
                <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-blue-500 rounded-img-field">
                    <div className="w-full md:w-1/2 rounded-img-letter bg-gray-100 p-2">
                        <img
                            src={GR56}
                            alt="placeholder"
                            className="rounded-img-letter"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-white p-2">
                        <p className="text-xl p-4">
                            Công Ty TNHH Vận Tải Quốc Tế Trường Hưng với nhiều năm hoạt động trong lĩnh vực vận tải đường thủy nội địa, Trường Hưng tự tin mang lại cho khách hàng những trải nghiệm tốt nhất về dịch vụ với mức cước phí siêu rẻ, siêu tiết kiệm dành cho khách hàng. Hiện tại, Trường Hưng đang sở hữu đội tàu vận tải chuyên dụng cấp VR-SB được trang bị các thiết bị hiện đại có trọng tải dao động từ 3.000 tấn đến 15.000 tấn phục vụ chở hàng siêu trường, siêu trọng.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-blue-500 text-white pb-8">
                        <div className="m-8 p-4">
                            <p className="text-lg font-bold mb-4">
                                DỊCH VỤ VẬN TẢI BẰNG ĐƯỜNG THỦY NỘI ĐỊA TRƯỜNG HƯNG CHUYÊN CHỞ CÁC MẶT HÀNG:
                            </p>
                            <p className="p-6 text-xl border border-gray-300 rounded-lg">
                                Cùng với đội ngũ thuyền trưởng, thuyền viên đào tạo chuyên nghiệp, nhiệt tình, năng động và có trách nhiệm và là một trong những đối tác tin cậy, lâu dài của mọi người. Quý khách hàng sẽ cảm thấy thật sự an tâm khi sử dụng dịch vụ vận tải của chúng tôi. Sự hài lòng của khách hàng chính là sự thể hiện niềm tin và uy tín nhất của chúng tôi.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FieldCard
                            image={Field1}
                            title="Sản phẩm thép:"
                            detail="Thép phôi, thép phôi tấm, thép cuộn cán nóng, thép cuộn cán dây, v.v…"
                        />
                        <FieldCard
                            image={Field2}
                            title="Sản phẩm vật liệu xây dựng:"
                            detail="Thép xây dựng, Cliner, xi măng rời, tro bay, đá, cát, v.v…"
                        />
                        <FieldCard
                            image={Field3}
                            title="Sản phẩm than:"
                            detail="Than cám, than  cục, than đá, v.v…"
                        />
                        <FieldCard
                            image={Field4}
                            title="Hàng xuất nhập khẩu và hàng siêu trường, siêu trọng."
                            detail=""
                        />
                        <FieldCard
                            image={Field5}
                            title="Hàng nông sản:"
                            detail="Gạo, lúa, bắp, bột mì, rau củ quả."
                        />
                        <FieldCard
                            image={Field6}
                            title="Hàng sản xuất công nghiệp:"
                            detail="Dệt vải, bao bì, thức ăn gia súc, máy móc thiết bị."
                        />
                    </div>
                </div>
                <div className="mb-8 mt-8">
                    <h2 className="text-3xl font-bold mb-4">Mạng lưới hoạt động</h2>
                    <div className="border-2 border-blue-500 rounded-tl-2xl p-8 mb-4">
                        <p className="text-lg font-bold">
                            Với gần 9 năm hoạt động nghề, Trường Hưng có đầy đủ giấy phép hoạt
                            động tại các tuyến đường vận tải đường thủy trên khắp cả nước. Hiện
                            tại, công ty chuyên vận tải các tuyến như sau:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Từ Dung Quất, Quảng Ngãi đến khu vực Sài Gòn/Đồng Nai/Long An: Chuyên vận chuyển các sản phẩm như thép xây dựng, đá, thép thanh vằn, thép cuộn dây tròn cho Công ty Cổ phần thép Hòa Phát Dung Quất thông qua đơn vị vận tải trung gian.",
                            "Từ Hải Dương đến khu vực Sài Gòn/ Đồng Nai/Long An: Chuyên vận chuyển các sản phẩm như sắt xây dựng, đá, thép thanh vằn, thép cuôn dây tròn cho Công ty Cổ phần thép Hòa Phát Hải Dương thông qua đơn vị vận tải trung gian.",
                            "Từ Phú Mỹ, Bà Rịa - Vũng Tàu đến Dung Quất, Quảng Ngãi/Hải Dương/Nghệ An: Chuyên vận chuyển các sản phẩm như sắt xây dựng, đá, thép thanh vằn, thép cuôn dây tròn…",
                            "Từ Cảng Sơn Dương,Hà Tĩnh đến Cảng Hồ Chí Minh/Cảng Phú Mỹ/Cảng Thiên Lộc Thành/Cảng Quy Nhơn: Chuyên vận chuyển các sản phẩm thép như thép phôi, thép phôi tấm, thép cuộn cán nóng, thép cuộn cán dây cho Công ty TNHH Gang thép Hưng Nghiệp Formosa Hà Tĩnh thông qua đơn vị vận tải trung gian.",
                            "Từ Đồng Nai  đến Hòn La, Quảng Bình: Chuyên vận chuyển than các loại.",
                            "Từ Hà Nam đến Nha Trang, Khánh Hòa: Chuyên vận chuyển  hàng xi măng, Cliner cho Xi Măng Xuân Thành."
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg p-4"
                            >
                                <p className="text-lg">
                                    <span className="bg-orange-200 rounded-full px-2 mr-2">{index + 1}</span> {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldAndNetwork;
