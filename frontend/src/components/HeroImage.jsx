import React from 'react';

function ReferralHero() {
  return (
    <div className="relative bg-blue-50 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto overflow-hidden shadow-2xl mt-8">
      {/* Floating Money Images */}
      <div className="absolute top-4 left-4">
        <img src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kG3omQZ9kibH2FtcA6l9y7T6h9F-V4J-0SFcWhu5Fm3jlq6DOJGObBrBvS4ld7xTJBGYJg7MzmJIiIEr8cwMjn7lz2J-RPLw8k3W~8T0y1BI4a9uOEBdNO3wsSDABejKj3Mhbev748NfHfGBM3FdmdTCby1SfIQWr0DF7sGMpj5gneszPBHjSLTG4JitgvQQl-LDNMchjVM8zMvajAvJxdWfK2Ihs4pCIIU~d0s~FGTbi2fW5m1UtpsK1OvAft-GPmgQ9UOQSEFE-VQmG06L6DpZwQOM2dhfHSVBwSKO6ax0OKdQLFNVlL9LtbDjmowBNhLaTTlxY49FK7be3bFJzQ__" alt="" className="w-12 md:w-16" />
      </div>
      <div className="absolute top-4 right-4">
        <img src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kG3omQZ9kibH2FtcA6l9y7T6h9F-V4J-0SFcWhu5Fm3jlq6DOJGObBrBvS4ld7xTJBGYJg7MzmJIiIEr8cwMjn7lz2J-RPLw8k3W~8T0y1BI4a9uOEBdNO3wsSDABejKj3Mhbev748NfHfGBM3FdmdTCby1SfIQWr0DF7sGMpj5gneszPBHjSLTG4JitgvQQl-LDNMchjVM8zMvajAvJxdWfK2Ihs4pCIIU~d0s~FGTbi2fW5m1UtpsK1OvAft-GPmgQ9UOQSEFE-VQmG06L6DpZwQOM2dhfHSVBwSKO6ax0OKdQLFNVlL9LtbDjmowBNhLaTTlxY49FK7be3bFJzQ__" alt="" className="w-12 md:w-16" />
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's Learn <br />
            <span className="text-gray-800">&amp; Earn</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              Get a chance to win <br />
              <span className="text-lg md:text-xl">up-to </span>
              <span className="text-blue-600 font-bold text-2xl md:text-3xl">Rs. 15,000</span>
            </p>
            
            <button className="bg-blue-600 text-white px-12 py-3 rounded-lg hover:bg-blue-700 transition-colors  ">
              Refer Now
            </button>
          </div>
        </div>

        {/* Right Section - Phone and People Image */}
        <div className="relative md:w-1/2">
          {/* Floating Money Elements */}
          <div className="absolute -top-4 right-8 z-10">
            <img src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kG3omQZ9kibH2FtcA6l9y7T6h9F-V4J-0SFcWhu5Fm3jlq6DOJGObBrBvS4ld7xTJBGYJg7MzmJIiIEr8cwMjn7lz2J-RPLw8k3W~8T0y1BI4a9uOEBdNO3wsSDABejKj3Mhbev748NfHfGBM3FdmdTCby1SfIQWr0DF7sGMpj5gneszPBHjSLTG4JitgvQQl-LDNMchjVM8zMvajAvJxdWfK2Ihs4pCIIU~d0s~FGTbi2fW5m1UtpsK1OvAft-GPmgQ9UOQSEFE-VQmG06L6DpZwQOM2dhfHSVBwSKO6ax0OKdQLFNVlL9LtbDjmowBNhLaTTlxY49FK7be3bFJzQ__" alt="" className="w-12" />
          </div>
          <div className="absolute top-1/2 -left-4 z-10">
            <img src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kG3omQZ9kibH2FtcA6l9y7T6h9F-V4J-0SFcWhu5Fm3jlq6DOJGObBrBvS4ld7xTJBGYJg7MzmJIiIEr8cwMjn7lz2J-RPLw8k3W~8T0y1BI4a9uOEBdNO3wsSDABejKj3Mhbev748NfHfGBM3FdmdTCby1SfIQWr0DF7sGMpj5gneszPBHjSLTG4JitgvQQl-LDNMchjVM8zMvajAvJxdWfK2Ihs4pCIIU~d0s~FGTbi2fW5m1UtpsK1OvAft-GPmgQ9UOQSEFE-VQmG06L6DpZwQOM2dhfHSVBwSKO6ax0OKdQLFNVlL9LtbDjmowBNhLaTTlxY49FK7be3bFJzQ__" alt="" className="w-12" />
          </div>
          
          {/* Phone Mockup */}
          <div className="relative z-20">
            <img 
              src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EQinzhvbmMWk2ZVBhfvPuHSiEM9pkcpv4Z0PfPE~bg~w9Xblv1vcdZ0Bzhcuhyf9B5ZJKdzq27CZBZ21oOcMQk0IphTjwWLE9meHcPYzrwxShFCN6lzjJIjPeLF17V-DC0cVxWf2BXUWrgC9UlwfMMce3PxkaGiGO0P913hJGSmGv3YwFg-DXlOiyOc-iKwPMsmPz60vk230iR7qU2Uuxl4xplCp9vYU2FXvWS~-DcJKpyxVqH7pPlpSvx5RhkJlT2FrG8JHhhKZ~euf9wsc9EtZSzoqroW-OG2e4EdCEefE1~0OuMdI3dMOW0eLl8qu6CnBMVa-OlSnSjvp2EO4qw__" 
              alt="Phone showing Accredian website" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralHero;