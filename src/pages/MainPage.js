import HeaderForm from '../components/header/HeaderForm';
import MainForm1 from '../components/main/MainForm1';
import MainForm2 from '../components/main/MainForm2';
import MainForm3 from '../components/main/MainForm3';
import FooterForm from '../components/footer/FooterForm';

const MainPage = () => {
    return (
        <div>
            <HeaderForm></HeaderForm>
            <MainForm1></MainForm1>
            <MainForm2></MainForm2>
            <MainForm3></MainForm3>
            <FooterForm></FooterForm>
        </div>
    );
};

export default MainPage;