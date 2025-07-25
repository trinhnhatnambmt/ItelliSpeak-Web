import { Avatar, Button } from "antd";
import { Glasses, Mail, MapIcon, Phone, TicketCheck } from "lucide-react";
import { motion } from "framer-motion";
import InterviewCard from "~/components/InterviewCard";
import Footer from "~/sections/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserProfileAPI } from "~/apis";

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);

    const personalInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: userProfile ? userProfile?.email : "Email chưa cập nhật",
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: userProfile?.phone
                ? userProfile?.phone
                : "Số điện thoại chưa cập nhật",
        },
        { icon: <MapIcon className="w-5 h-5" />, label: "Vietnam" },
        {
            icon: <TicketCheck className="w-5 h-5" />,
            label: userProfile?.role ? userProfile?.role : "Chưa cập nhật",
        },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        getUserProfileAPI().then((data) => {
            setUserProfile(data.data);
            // console.log(data.data);
        });
    }, []);

    return (
        <div className="bg-white dark:bg-[#0e0c15] text-black dark:text-white transition-colors duration-300 min-h-screen pt-3">
            <div className="container mx-auto px-5 mt-10 flex gap-6 flex-col lg:flex-row relative z-10">
                {/* Left Info Panel */}
                <div className="w-full lg:w-1/3 space-y-6">
                    {/* User card */}
                    <div className="bg-[#252525] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-lg">
                        <Avatar size={72} src={userProfile?.avatar} />
                        <h2 className="font-bold text-2xl mt-4 text-white">
                            @{userProfile?.userName}
                        </h2>
                        <p className="text-neutral-400 mt-1">
                            {userProfile?.firstName && userProfile?.lastName
                                ? userProfile?.firstName + userProfile?.lastName
                                : "Chưa cập nhật tên đầy đủ"}
                        </p>
                    </div>

                    {/* Info card */}
                    <div className="bg-[#252525] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-lg">
                        <h2 className="font-bold text-xl mb-4 text-white">
                            Thông tin cá nhân
                        </h2>
                        <div className="space-y-3">
                            {personalInfo.map((item) => (
                                <div
                                    className="flex items-center text-neutral-300"
                                    key={item.label}
                                >
                                    <span className="mr-3 text-neutral-400">
                                        {item.icon}
                                    </span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            className="flex items-center cursor-pointer gap-2 mt-4 px-4 py-2 rounded-lg font-semibold transition-colors duration-300
             bg-blue-600 text-white hover:bg-blue-700 
             dark:bg-blue-500 dark:hover:bg-blue-600"
                            onClick={() => navigate("/main/updateHR")}
                        >
                            <Glasses /> <p>Trở thành người đánh giá</p>
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-2/3 space-y-10">
                    {/* Stats */}
                    <div className="bg-[#252525] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-white">
                                Thống kê luyện phỏng vấn
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {/* Buổi luyện tập */}
                                <div className="bg-[#333] dark:bg-[#2a2a2a] rounded-xl p-4 transition shadow hover:shadow-lg">
                                    <p className="text-sm text-neutral-400">
                                        Số buổi luyện tập
                                    </p>
                                    <p className="text-xl text-white-50 font-semibold mt-1">
                                        12 buổi
                                    </p>
                                    <p className="text-green-400 text-sm mt-1 ">
                                        +3 buổi trong tuần
                                    </p>
                                </div>

                                {/* Câu hỏi */}
                                <div className="bg-[#333] dark:bg-[#2a2a2a] rounded-xl p-4 transition shadow hover:shadow-lg">
                                    <p className="text-sm text-neutral-400">
                                        Câu hỏi đã trả lời
                                    </p>
                                    <p className="text-xl text-white-50 font-semibold mt-1">
                                        134 câu
                                    </p>
                                    <p className="text-green-400 text-sm mt-1">
                                        +25% so với tuần trước
                                    </p>
                                </div>

                                {/* Điểm số */}
                                <div className="bg-[#333] dark:bg-[#2a2a2a] rounded-xl p-4 transition shadow hover:shadow-lg">
                                    <p className="text-sm text-neutral-400">
                                        Điểm trung bình
                                    </p>
                                    <p className="text-xl text-white-50 font-semibold mt-1">
                                        8.4 / 10
                                    </p>
                                    <p className="text-yellow-400 text-sm mt-1">
                                        Giữ ổn định
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Interview History */}
                    <div className="pb-10">
                        <h2 className="font-extrabold text-3xl mb-6">
                            Lịch sử phỏng vấn của bạn
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <InterviewCard type="profile" />
                            <InterviewCard type="profile" />
                            <InterviewCard type="profile" />
                            <InterviewCard type="profile" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
