import _ from 'lodash';
import React from 'react';
import { Search, Grid, Table, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Inventorys } from '../../api/inventory/InventoryCollection';

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

const initialState = {
  loading: false,
  results: [],
  value: '',
};

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState;
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query };
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results };
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const resultRenderer = ({ name }) => <Label content={name} />;

function SearchStandard() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i');
      const isMatch = (result) => re.test(result.name);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(medicationSample, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => () => {
      clearTimeout(timeoutRef.current);
    }, []);

  return (
      <Grid>
        <Grid.Column width={6}>
          <Search
              loading={loading}
              onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.result.name })
              }
              onSearchChange={handleSearchChange}
              resultRenderer={resultRenderer}
              results={results}
              value={value}
              showNoResults={'true'}
              selectFirstResult={'true'}
          />
        </Grid.Column>

        <Grid.Column width={10}>
          {/* <Segment> */}
          {/*  <pre style={{ overflowX: 'auto' }}> */}
          {/*  {JSON.stringify({ results }, null, 2)} */}
          {/* </pre> */}
          {/* </Segment> */}
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Supply</Table.HeaderCell>
                <Table.HeaderCell>Expiration</Table.HeaderCell>
                <Table.HeaderCell>Reserves Supply</Table.HeaderCell>
                <Table.HeaderCell>Reserves Expiration</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Row>
              {JSON.stringify({ results }, null, 2)}
            </Table.Row>
          </Table>
        </Grid.Column>
      </Grid>
  );
}

/** Require an array of Stuff documents in the props. */
SearchStandard.propTypes = {
  inventorys: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Inventorys.subscribeInventory();
  return {
    inventorys: Inventorys.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchStandard);
