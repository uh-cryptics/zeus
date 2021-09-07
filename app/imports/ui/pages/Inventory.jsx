import React from 'react';
import { Segment } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

/** A simple static component to render some text for the landing page. */
class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { medicationTable: true };
    this.handleTable = this.handleTable.bind(this);
  }

  handleTable(e) {
    e = e == 'true';

    if (this.state.medicationTable != e) {
      this.setState({ medicationTable: e });
    }
  }

  render() {
    /**
     * These two varaibles (supplies and medication sample) will be removed once backend
     * database is set, just getting a feel how things would look on the page.
     */
    const suppliesSample = [
      {
        name: 'Theraband - Green',
        location: 'Cabinet 2',
        amount: 1,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Theraband - Yellow',
        location: 'Cabinet 2',
        amount: 1,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Theraband - Red',
        location: 'Cabinet 2',
        amount: 1,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Theraband - Beige',
        location: 'Cabinet 2',
        amount: 1,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Hot Packs',
        location: 'Cabinet 2',
        amount: 0,
        reserves_location: 'Back Cabinet',
        reserves_amount: 0,
      },
      {
        name: 'Cold Packs',
        location: 'Cabinet 2',
        amount: 0,
        reserves_location: 'Back Cabinet',
        reserves_amount: 0,
      },
      {
        name: 'ACE wrap 2"',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'ACE wrap 3"',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'ACE wrap 4"',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'ACE wrap 6"',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Blood Pressure Monitors - Patient',
        location: 'Back Cabinet',
        amount: 3,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Cavicide',
        location: 'Shower Closet',
        amount: [
          1,
          'Gal',
        ],
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Rapid Strep Strips',
        location: 'Refrig Closet',
        amount: 25,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Emesis Basin',
        location: 'Drawer 9',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Hand Sanitizer - Large',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Hand Sanitizer - Small for Patients',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Pregnancy Tests',
        location: 'Refrigerator',
        amount: 20,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Urine Dip Sticks',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Sensi Wrap 2"',
        location: 'Drawer 6',
        amount: 6,
        reserves_location: 'Back Cabinet',
        reserves_amount: 30,
      },
      {
        name: 'UnaBoot',
        location: '',
        amount: 0,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Thermometers - Patient Supplies',
        location: 'Case 4',
        amount: 3,
        reserves_location: '',
        reserves_amount: 0,
      },
      {
        name: 'Thermometer Sheaths',
        location: 'Case 4',
        amount: 2,
        reserves_location: '',
        reserves_amount: 0,
      },
    ];

    const medicationSample = [
      {
        name: 'Benzonatate Capsules',
        type: 'Allergy & Cold Medicines',
        location: 'Case 2',
        amount: 15,
        supply: [
          19,
          100,
        ],
        expiration: [
          '10/16',
          '3/17',
        ],
        reserves_supply: 0,
        reserves_expiration: '03/17/2021',
      },
      {
        name: 'Cyclobenzaprine 10 mg',
        type: 'Analgesics/Antiinflammatory',
        location: 'Case 4',
        amount: 30,
        supply: 80,
        expiration: '03/17/2021',
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Gabapentin 300 mg ',
        type: 'Analgesics/Antiinflammatory',
        location: 'Case 4',
        amount: 30,
        supply: 112,
        expiration: [
          '6/16',
          '3/17',
        ],
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Lidocaine w/o Epi, injectable',
        type: 'Analgesics/Antiinflammatory',
        location: 'Bottom Drawer',
        amount: [
          1,
          'bottle',
        ],
        supply: 2,
        expiration: '10/16/2021',
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Prednisone 20 mg tabs',
        type: 'Analgesics/Antiinflammatory',
        location: 'Case 4',
        amount: 20,
        supply: 70,
        expiration: '3/1/17',
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Tramadol 50 mg Tabs',
        type: 'Analgesics/Antiinflammatory',
        location: 'Case 4',
        amount: 50,
        supply: 500,
        expiration: '04/17/2021',
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Amlodipine 5 mg ',
        type: 'Antihypertensives',
        location: 'Case 7',
        amount: 30,
        supply: 32,
        expiration: '4/30/18',
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Amlodipine 10 mg',
        type: 'Antihypertensives',
        location: 'Case 7',
        amount: 30,
        supply: [
          57,
          46,
        ],
        expiration: [
          '4/16',
          '4/30/2018',
        ],
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Amlodipine 5mg/ Atorvastatin 20 mg',
        type: 'Antihypertensives',
        location: 'Case 7',
        amount: 0,
        supply: 84,
        expiration: [
          '8/16',
          '8/17',
        ],
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Chlorthalidone or Hydrochlorothiazide 25 mg tabs',
        type: 'Antihypertensives',
        location: 'Case 7',
        amount: 50,
        supply: [
          85,
          134,
        ],
        expiration: [
          '6/16',
          '9/16',
        ],
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Furosemide 20 mg ',
        type: 'Antihypertensives',
        location: 'Case 7',
        amount: 30,
        supply: 86,
        expiration: '4/1/16',
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Lisinopril 10 mg tab',
        type: 'Antihypertensives',
        location: 'Case 7',
        amount: 30,
        supply: 0,
        expiration: null,
        reserves_supply: 0,
        reserves_expiration: null,
      },
      {
        name: 'Azilsartan/chlorthalidone 40mg/25mg',
        type: 'Antihypertensives',
        location: 'Case 7',
        amount: 0,
        supply: 70,
        expiration: '7/1/16',
        reserves_supply: {
          quantity: 2,
          unit: 'bottle',
        },
        reserves_expiration: null,
      },
    ];

    /** Grabs header information */
    function tableHeader(data) {
      const headers = Object.keys(data[0]);
      const tableHeader = headers.map((header, i) => {
        const key = `h${i}`;
        header = header.toUpperCase();

        const modifiedHeader = header.replace(/_/g, ' ');
        return (
          <th key={key}>{modifiedHeader}</th>
        );
      });
      return (tableHeader);
    }

    /** Grabs the values of each column data */
    function tableData(data) {
      const headers = Object.keys(data[0]);

      const listedItems = data.map((row, i) => {
        const columns = (Object.values(row)).map((col, j) => {
          const key = `${i}_${j}`;

          if (typeof (col) === 'object' && col != null) {
            col = Object.values(col).join(' ');
          }
          return (
            <td key={key} data-label={headers[j]}>{col}</td>
          );
        });

        return (
          <tr key={i}>
            {columns}
          </tr>
        );
      });

      return (listedItems);
    }

    return (
      <div>
        <NavBar />
          <Segment inverted basic textAlign='center' padded='very'>
            <h1 className="fontsize-big h1-white">Inventory</h1>
            {this.state.medicationTable ?
              <div>
                <div className="ui two top attached buttons">
                  <button className="ui button positive" value={true} onClick={e => this.handleTable(e.target.value)}>Medication</button>
                  <button className="ui button" value={false} onClick={e => this.handleTable(e.target.value)}>Supplies</button>
                </div>
                <div className="ui attached segment">
                  <table className="ui celled table fixed striped">
                    <thead>
                      <tr>
                        {tableHeader(medicationSample)}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData(medicationSample)}
                    </tbody>
                  </table>
                </div>
              </div>
              :
              <div>
                <div className="ui two top attached buttons">
                  <button className="ui button" value={true} onClick={e => this.handleTable(e.target.value)}>Medication</button>
                  <button className="ui button positive" value={false} onClick={e => this.handleTable(e.target.value)}>Supplies</button>
                </div>
                <div className="ui attached segment">
                  <table className="ui celled table fixed striped">
                    <thead>
                      <tr>
                        {tableHeader(suppliesSample)}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData(suppliesSample)}
                    </tbody>
                  </table>
                </div>
              </div>
            }
          </Segment>
      </div >
    );
  }
}

export default Inventory;
