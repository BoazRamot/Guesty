import {
  Grid,
  ListItem,
  Typography,
  Tooltip,
} from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { dateFormater } from '../../common/date';

const Row = ({ data, index, style }) => {
  const { rows, page, rowsPerPage } = data;
  const item = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  )[index];

  if (!item) return null;
  const { recurrence, nextEventDate, recipientsList, timezone } =
    item;
  return (
    <ListItem button style={style}>
      <Grid container>
        <Grid item xs={1}>
          <Brightness1Icon
            color={
              item.loading
                ? 'action'
                : item.treated
                ? 'primary'
                : 'error'
            }
          />
        </Grid>
        <Grid item xs>
          <Typography>
            {dateFormater({
              millisecondsDate: nextEventDate.dateMs,
              dateFormat: 'DD-MM-YYYY HH:mm',
            })}
          </Typography>
        </Grid>
        <Grid item xs>
          <Tooltip
            title={recipientsList.toString().replace(',', '; ')}
          >
            <div>{recipientsList.length} Recipients</div>
          </Tooltip>
        </Grid>
        <Grid item xs>
          {timezone}
        </Grid>
        <Grid item xs>
          every {recurrence.days.toString()} on {recurrence.time}
        </Grid>
      </Grid>
    </ListItem>
  );
};

function TableBodyRows({ itemCount, rows, page, rowsPerPage }) {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          className="Grid"
          height={height}
          itemCount={itemCount}
          itemSize={Math.max(height / itemCount, 35)}
          width={width}
          itemData={{
            rows,
            page,
            rowsPerPage,
          }}
        >
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
}

export default TableBodyRows;
