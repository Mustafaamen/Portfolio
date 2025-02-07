import React, { useState, useEffect } from 'react';
import './Load.css';

function Load() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة تأخير التحميل
    setTimeout(() => {
      setLoading(false); // تغيير حالة التحميل بعد 2 ثانية
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div id="loading-screen">
          <span>Mustafa</span>
        </div>
      ) : (
        <div id="content">
          {/* باقي المحتوى بتاع الموقع هنا */}
          <h1>Welcome to my Portfolio</h1>
        </div>
      )}
    </div>
  );
}

export default Load;
