import React, { useState } from "react"
import './App.css';
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai"
import { data } from "./data"

function App() {

  const [mockData, setMockData] = useState(data)
  const [selectedData, setSelectedData] = useState(data[0])
  const [selIndex, setSelIndex] = useState(0)
  const [open, setOpen] = useState(false)

  // console.log(Selected.duties[0]);

  function filteredData(init) {
    let arr = (data.filter((a) => (a.id == init)))
    setSelectedData(arr[0])
  }
  console.log(setSelectedData);
  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {
            mockData.map((e) => (
              <h4 onClick={() => filteredData(e.id)}>{e.company}</h4>
            ))
          }
        </div>
        <div className="company-content">
          <h2 className="job-title">{selectedData.title}</h2>
          <p className="company-name">{selectedData.company}</p>
          <p className="date">{selectedData.dates}</p>
          {
            selectedData.duties.map((e, index) => (
              <div className="text">
                {
                  open && index == selIndex ?
                    (
                      <AiFillCaretRight
                        onClick={() => {
                          setSelIndex(index)
                          setOpen(!open)
                        }} />
                    ) : (
                      <AiFillCaretDown
                        onClick={() => {
                          setSelIndex(index)
                          setOpen(!open)
                        }} />
                    )
                }

                {/* <AiFillCaretDown
                  onClick={() => {
                    setSelIndex(index)
                    setOpen(!open)
                  }} /> */}

                <p>
                  <h4>Subtitle: {index}</h4>
                  {open && selIndex == index && e}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default App;
