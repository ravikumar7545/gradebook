import React, { useContext } from 'react';
import '../css/download.css';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import download_icon from '../images/download_icon.png';
import StudentContext from '../StudentContext';

const DownloadPage = (props) => {
  const { setIsDownloadTrigger } = useContext(StudentContext);
  const data = props.value;
  const downloadPDF = () => {
    let doc = new jsPDF();
    autoTable(doc, {
      body: data,
      columns: [
        { header: 'Id', dataKey: 'id' },
        { header: 'Name', dataKey: 'name' },
        { header: 'Ticket Number', dataKey: 'ticket_number' },
        { header: 'Rating Grade', dataKey: 'rating_grade' },
        { header: 'Exam Grade', dataKey: 'exam_grade' },
        { header: 'Final Grade', dataKey: 'final_grade' },
      ],
    });

    doc.save('table.pdf');
  };
  const downloadJSON = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };
  return (
    <div className="download-page">
      <div className="download-box">
        <h2>Download Table</h2>
        <img
          onClick={() => setIsDownloadTrigger(false)}
          src={require('../images/close.png')}
          alt="Close"
        />
        <button>
          <img className="download_icon" src={download_icon} alt="Download" />
          <CSVLink className="download_link" data={data}>
            CSV
          </CSVLink>
        </button>
        <button onClick={downloadJSON}>
          <img className="download_icon" src={download_icon} alt="Download" />
          JSON
        </button>
        <button onClick={downloadPDF}>
          <img className="download_icon" src={download_icon} alt="Download" />
          PDF
        </button>
      </div>
    </div>
  );
};

export default DownloadPage;
