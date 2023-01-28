import { Grid } from '@mui/material'
import MaterialTable from 'material-table'
import * as R from 'ramda'
import { prideTsv } from '../shared/pride-list'

const lines = R.pipe(
  R.split('\n'),
  R.map<string, string[]>(R.split('\t')),
  R.map<string[], string[]>(R.drop(2)),
  R.map<string[], string[]>(R.dropLast<string>(1)),
)(prideTsv)

const titleFields = R.head(lines) ?? []

const createTitle = (field: string) => ({ title: field, field })

const createData = R.zipObj(titleFields)
type Data = ReturnType<typeof createData>

const columns = R.map(createTitle, titleFields)

const songs = R.pipe(R.drop(1), R.map<string[], Data>(createData))(lines)

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
