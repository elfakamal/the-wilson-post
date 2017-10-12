import * as React from 'react';

interface Props {
  field: string;
  label: string;
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLElement>) => void;
  children?: React.ReactElement<any>;
}

const FormGroup = ({ field, label, value, onChange, children }: Props): JSX.Element => (
  <div className="form-group">
    <div>
      <label htmlFor={field}>{label}</label>
    </div>
    {children ? React.cloneElement(children, { value, onChange }) : (
      <input value={value} onChange={onChange} />
    )}
  </div>
);

export default FormGroup;
