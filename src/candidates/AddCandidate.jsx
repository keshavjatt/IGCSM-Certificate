import { useState, useRef, useEffect } from "react";
import { Typography, Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCandidate = () => {
    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        stu_name: 'Mohit Saini',
        fathers_name: 'Jaswant Kumar Saini',
        course: 'Certificate Course in Java (CIJ)',
        periods: '02 MAY 2024 TO 01 AUG 2024',
        image: 'https://static2.bigstockphoto.com/6/2/4/large1500/426377597.jpg',
        grade: '"B" Grade',
        enroll_no: 'HR/102MAY2401109',
        dob: 'DD/MM/YYYY',
        asc_name: 'MEHTA COMPUTER',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };




    const handleSubmit = (e) => {
        // console.log(formData,'sadsad')
        e.preventDefault();
        navigate("/print", { state: { formD: formData } });
    };


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imgname = event.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    (maxSize - img.width) / 2,
                    (maxSize - img.height) / 2
                );
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: "image/png",
                            lastModified: Date.now(),
                        });
                        setImage(file);
                        setFormData((prevData) => ({
                            ...prevData,
                            image: file,
                        }));
                    },
                    "image/jpeg",
                    0.8
                );
            };
        };
    };

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    return (
        <>
            <div className="bgcolor">
                <Box sx={{ display: "flex" }}>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Card
                            sx={{
                                width: "98%",
                                overflow: "hidden",
                                padding: "12px",
                            }}
                        >
                            <Box height={10} />
                            <Typography variant="h5" align="center">
                                IGCSM CERTIFICATE
                            </Typography>
                            <div className="w-full max-w-md mx-auto my-10">
                                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visitor_name">
                                            STUDENT NAME
                                        </label>
                                        <input
                                            type="text"
                                            name="stu_name"
                                            value={formData?.stu_name}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            Father's Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fathers_name"
                                            value={formData?.fathers_name}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            COURSE NAME
                                        </label>
                                        <input
                                            type="text"
                                            name="course"
                                            value={formData?.course}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Image URL
                                        </label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData?.image}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            DURING THE PERIOD
                                        </label>
                                        <input
                                            type="text"
                                            name="periods"
                                            value={formData?.periods}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            GRADE
                                        </label>
                                        <input
                                            type="text"
                                            name="grade"
                                            value={formData?.grade}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            ENROLLMENT NO.
                                        </label>
                                        <input
                                            type="text"
                                            name="enroll_no"
                                            value={formData?.enroll_no}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            DATE OF BIRTH
                                        </label>
                                        <input
                                            type="text"
                                            name="dob"
                                            value={formData?.dob}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            ASC NAME
                                        </label>
                                        <input
                                            type="text"
                                            name="asc_name"
                                            value={formData?.asc_name}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <div className="flex items-center justify-center">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </Box>
                </Box>
            </div>

        </>
    );
};

export default AddCandidate;