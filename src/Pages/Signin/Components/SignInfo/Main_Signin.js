import { useState } from 'react';
import InfoSignin from "./Info_Signin";
import CodeAntAI from "../../../HOC/CodeAntAI";
import saasinfo from './SAASdata';
import self_hostedinfo from './Self_Hosteddata';

function MainSigin() {

    const [signindata, setSignindata] = useState(saasinfo);
    const [selected, setSelected] = useState('SAAS');

    const handleButtonClick = (value) => {
        setSelected(value);
        if (value === 'SAAS') {
            setSignindata(saasinfo);
        } else {
            setSignindata(self_hostedinfo);
        }
    };

    return (
        <>
            <div className="lg:w-[672px] h-[602.34px] sm:w-[408px] bg-white rounded-3xl font-bold border border-[#E6E8F0] text-[#181D27]">
                <div className="w-full h-fit gap-5 lg:px-6 sm:px-4 py-9 border-b">
                    <div className="flex flex-col items-center gap-6">
                        <CodeAntAI />
                        <p className="lg:text-[32px]/[48px] sm:text-[24px]/[48px] font-semibold">Welcome to CodeAnt AI</p>
                    </div>
                    <div className="flex flex-row p-3">
                        <button className={`w-[311px] h-[60px] border-2 rounded-lg ${selected === 'SAAS' ? 'text-white bg-[#1570EF]' : 'text-[#414651] bg-white'}`}
                            onClick={() => handleButtonClick('SAAS')}>SAAS
                        </button>
                        <button className={`w-[311px] h-[60px] border-2 rounded-lg ${selected === 'Self Hosted' ? 'text-white bg-[#1570EF]' : 'text-[#414651] bg-white'}`}
                            onClick={() => handleButtonClick('Self Hosted')}>Self Hosted
                        </button>
                    </div>
                </div>
                <InfoSignin signindata={signindata} />
            </div>
            <p className="font-normal">By signing up you agree to the <span className="font-bold">Privacy Policy</span>.</p>
        </>
    )
}
export default MainSigin;