import React from "react";

const Service = () => {
  return (
    <div id="service" className="py-12 bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center my-8">خدماتنا</h1>
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">حل الواجبات</h2>
          <p>نقدم حلولاً شاملة للواجبات المدرسية والجامعية بجودة عالية.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">إعداد الأبحاث</h2>
          <p>نساعدك في إعداد أبحاث متعمقة تلبي متطلباتك الأكاديمية.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">تطوير المشاريع</h2>
          <p>نقدم خدمات تطوير المشاريع الأكاديمية حسب احتياجاتك.</p>
        </div>
      </div>
      {/* <div className="my-8 flex flex-col items-center ">
        <img
          src="https://solvely.ai/web-static-landing/assets/subject-1eed2cde.png"
          alt="service image"
          className="rounded-2xl shadow-lg w-200 bg-gray-200"
        />
      </div> */}
    </div>
  );
};

export default Service;
