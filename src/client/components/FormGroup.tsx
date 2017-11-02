import * as React from 'react';

interface Props {
  field: string;
  label: string;
  value?: string;
  onChange?: (event: React.SyntheticEvent<HTMLElement>) => void;
  children?: React.ReactElement<any>;
  style?: React.CSSProperties;
}

const FormGroup = ({ field, label, value, onChange, style, children }: Props): JSX.Element => {
  const props: Pick<Props, 'value' | 'onChange' | 'style'> = {};

  if (value) {
    props.value = value;
  }

  if (onChange) {
    props.onChange = onChange;
  }

  if (style) {
    props.style = style;
  }

  return (
    <div className="form-group">
      <div>
        <label htmlFor={field}>{label}</label>
      </div>
      {children ? React.cloneElement(children, props) : (
        <input {...props} />
      )}
    </div>
  );
};

export default FormGroup;
