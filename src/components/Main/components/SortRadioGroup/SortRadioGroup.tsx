import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { FORM_LABEL_ID, RADIO_GROUP_NAME } from './constants';
import { RadioSortValues } from '../../../../typescript/enums/radio-sort-values';
import { sortTypeStore } from '../../../../stores/sort-type-store/sort-type.store';
import { observer } from 'mobx-react-lite';

export const SortRadioGroup = observer(() => (
  <FormControl>
    <FormLabel id={FORM_LABEL_ID}>Sort tasks</FormLabel>
    <RadioGroup
      row
      name={RADIO_GROUP_NAME}
      aria-labelledby={FORM_LABEL_ID}
      value={sortTypeStore.currentType}
      onChange={(event) => sortTypeStore.changeCurrentSort(event.target.value as RadioSortValues)}>
      <FormControlLabel
        value={RadioSortValues.All}
        control={<Radio />}
        label={RadioSortValues.All}
      />
      <FormControlLabel
        value={RadioSortValues.Active}
        control={<Radio />}
        label={RadioSortValues.Active}
      />
      <FormControlLabel
        value={RadioSortValues.Completed}
        control={<Radio />}
        label={RadioSortValues.Completed}
      />
    </RadioGroup>
  </FormControl>
));
