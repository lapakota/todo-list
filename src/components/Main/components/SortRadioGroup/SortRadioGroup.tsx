import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { FORM_LABEL_ID, RADIO_GROUP_NAME } from './constants';
import { SortTypes } from '../../../../typescript/enums/sort-types';
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
      onChange={(event) => sortTypeStore.changeCurrentSort(event.target.value as SortTypes)}>
      <FormControlLabel value={SortTypes.All} control={<Radio />} label={SortTypes.All} />
      <FormControlLabel value={SortTypes.Active} control={<Radio />} label={SortTypes.Active} />
      <FormControlLabel
        value={SortTypes.Completed}
        control={<Radio />}
        label={SortTypes.Completed}
      />
    </RadioGroup>
  </FormControl>
));
