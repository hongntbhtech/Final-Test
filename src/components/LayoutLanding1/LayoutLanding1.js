import React from 'react';
import Header from '../Header'; // Đường dẫn tới Header component của bạn
import Footer from '../Footer'; // Đường dẫn tới Footer component của bạn

const LayoutLanding1 = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default LayoutLanding1;
