import React, { useState } from 'react';
import '../SearchDate/style.css';
const SearchDate = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [currentDay, setCurrentDay] = useState(1);

    const numDaysToShow = 10;

    const updateCalendar = () => {
        const ellipseContainer = document.getElementById("ellipseContainer");
        if (ellipseContainer) {
            ellipseContainer.innerHTML = "";
            const totalDaysInMonth = new Date(new Date().getFullYear(), currentMonthIndex + 1, 0).getDate();
            for (let i = currentDay; i < currentDay + numDaysToShow && i <= totalDaysInMonth; i++) {
                const ellipse = document.createElement("div");
                ellipse.classList.add("ellipse");
                ellipse.textContent = i.toString();
                ellipseContainer.appendChild(ellipse);
            }
        }
    };

    const handleMonthChange = (event) => {
        setCurrentMonthIndex(parseInt(event.target.value));
        setCurrentDay(1);
        updateCalendar();
    };

    const handleLeftArrowClick = () => {
        if (currentDay > 1) {
            setCurrentDay(currentDay - numDaysToShow);
            if (currentDay < 1) {
                setCurrentDay(1);
            }
            updateCalendar();
        }
    };

    const handleRightArrowClick = () => {
        const totalDaysInMonth = new Date(new Date().getFullYear(), currentMonthIndex + 1, 0).getDate();
        if (currentDay <= totalDaysInMonth - numDaysToShow + 1) {
            setCurrentDay(currentDay + numDaysToShow);
            updateCalendar();
        }
    };

    return (
        <div className="calendar">
            <select id="monthSelect" onChange={handleMonthChange}>
                <option value="0">Janeiro</option>
                <option value="1">Fevereiro</option>
                <option value="2">Março</option>
                <option value="3">Abril</option>
                <option value="4">Maio</option>
                <option value="5">Junho</option>
                <option value="6">Julho</option>
                <option value="7">Agosto</option>
                <option value="8">Setembro</option>
                <option value="9">Outubro</option>
                <option value="10">Novembro</option>
                <option value="11">Dezembro</option>
            </select>
            <div className="carousel">
                <div className="ellipse-container" id="ellipseContainer"></div>
                <button className="arrow left" onClick={handleLeftArrowClick}>&lt;</button>
                <button className="arrow right" onClick={handleRightArrowClick}>&gt;</button>
            </div>
        </div>
    );
};

export default SearchDate;
