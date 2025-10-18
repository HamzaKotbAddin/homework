"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex justify-center relative items-center flex-col"
    >
      <div className="flex justify-center w-full  mb-6 mt-6">
        <NavigationMenu className="bg-gray-200 py-6 px-4 rounded-md mb-6 shadow-md border-4">
          <NavigationMenuList className="flex flex-row-reverse justify-center gap-6">
            <NavigationMenuItem>
              <a href="#home" className="text-gray-700 hover:text-blue-600">
                الرئيسية
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                حول
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#service" className="text-gray-700 hover:text-blue-600">
                خدماتنا
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="https://wa.me/966504189254?text=مرحبا%20أريد%20طلب%20خدمة"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                {" "}
                اتصل بنا
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hero-content text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          حلول واجبات وابحاث ومشاريع
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          استكشف الميزات المذهلة التي نقدمها لجعل تجربتك لا تُنسى، مع تسليم سريع
          ونتائج احترافية و
          <span className="text-blue-600"> خبرة اكثر من خمس سنين</span>.
        </p>

        {/* زر CTA */}
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/966548343359?text=مرحبا%20أريد%20طلب%20خدمة"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            اطلب الآن
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:shadow transition"
          >
            كيف نشتغل
          </a>
        </div>
      </div>
      <div className="my-5">
        <img
          src="https://www.khaberco.com/image/catalog/994/1581702439_8781_994.jpg"
          alt="hero image"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
