import { Grid } from '@mui/material'
import MaterialTable from 'material-table'
import * as R from 'ramda'
import { prideTsv } from '../shared/pride-list'

const lines = R.pipe(
  R.split('\n'),
  R.map<string, string[]>(R.split('\t')),
)(prideTsv)

const [titleFields, ...songRows] = lines ?? []

const createTitle = (field: string) => ({ title: field, field })

const createData = R.zipObj(titleFields)

const columns = R.map(createTitle, titleFields)

const songs = R.map(createData, songRows)

const Home = (): JSX.Element => {
  return (
    <Grid>
      <MaterialTable
        columns={columns}
        data={songs}
        title="Karaoke Pride"
        options={{
          pageSize: 20,
          pageSizeOptions: [10, 20, 30, 50, 100, 200, 1000, songs.length],
          maxBodyHeight: '85vh',
        }}
      />
    </Grid>
  )
}

export default Home
