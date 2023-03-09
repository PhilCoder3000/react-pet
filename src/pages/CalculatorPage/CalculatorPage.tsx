import { Title } from 'shared/ui/Text/Title';
import classes from "./CalculatorPage.module.scss";
import { Field } from './Field/Field';

export default function CalculatorPage() {
  return (
    <div className={classes.container}>
      <Title>Here you can calculate the expression</Title>
      <Field />
    </div>
  );
}
