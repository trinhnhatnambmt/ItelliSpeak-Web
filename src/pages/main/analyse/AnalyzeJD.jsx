import { Upload } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJdAPI } from "~/apis";
import JDCard from "~/components/jobDescription/JDCard";

const AnalyzeJD = () => {
    const navigate = useNavigate();
    const [jobDescriptions, setJobDescriptions] = useState([]);
    useEffect(() => {
        getAllJdAPI().then((res) => {
            setJobDescriptions(res);
        });
    }, []);

    return (
        <div>
            <section className="main-section">
                <div className="page-heading text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        Khám phá mô tả công việc phù hợp với bạn
                    </h1>
                    <h2 className="text-lg sm:text-xl text-gray-400">
                        Xem chi tiết yêu cầu tuyển dụng và lựa chọn công việc lý
                        tưởng.
                    </h2>
                    <button
                        onClick={() => navigate("/main/uploadJD")}
                        className="cursor-pointer inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                        <Upload className="w-5 h-5" />
                        Tải JD lên
                    </button>
                </div>

                <div className="resumes-section">
                    {jobDescriptions?.map((jd) => (
                        <JDCard key={jd.id} jd={jd} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AnalyzeJD;
