import React from 'react'
import classes from './HrSection.module.css';
import { ShadowedCard } from '../UI/Card/ShadowedCard';
import icon1 from '../../assets/images/hr_management.svg';
import icon2 from '../../assets/images/Logistics.svg';
import icon3 from '../../assets/images/paid_off.svg';
import Snapshot from '../../assets/images/RE_Snapshot_1.png';

const HrSection = (props) => {
    return (
        <section className={classes.hr_section} >
            <div className={classes.hr_content}>
                <div className={classes.hr_content__text}>
                    <h2 className={classes.hr_content__title}>
                        Human Resources
                    </h2>
                    <p className={classes.hr_content__description}>
                        Onboard new employees, manage the employee lifecycle and measure employee performance.
                    </p>
                </div>
                <div className={classes.hr_content__details}>
                    <ShadowedCard className={classes.hr_content__card}
                        title="Employee Management"
                        description="From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."
                        icon={icon1}
                    />
                    <ShadowedCard className={classes.hr_content__card}
                        title="Performance Management"
                        description="Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews."
                        icon={icon2}
                    />
                    <ShadowedCard className={classes.hr_content__card}
                        title="Paid time off"
                        description="Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."
                        icon={icon3}
                    />
                </div>
                <div className={classes.hr_content__snapshot}>
                    <img src={Snapshot} alt="hr_screenshot" />
                </div>
            </div>
        </section>
    )
}

export default HrSection
