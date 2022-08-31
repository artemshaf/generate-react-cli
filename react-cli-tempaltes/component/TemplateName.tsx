import styles from "./TemplateName.module.scss";
import { ITemplateNameInterface } from "./TemplateName.interface";

export const TemplateName = ({
  className,
  ...props
}: ITemplateNameInterface) => (
  <div className={styles.templateName} {...props}>
    TemplateName Component
  </div>
);
