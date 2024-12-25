import { StudentCardProps } from './StudentCardProps';
import { VacancyResponse } from './CompanyVacancyProps';
import { JobVacancy } from '../student-page/HomePage';

export interface StudentRequestProps {
    // jobApplyPK: StudentRequestPKProps;
    jobVacancy: JobVacancy;
    // student: StudentCardProps;
    status: string;
    notes: string;
    companyNote: string
}

export interface StudentRequestPKProps {
    jobVacancyId: number;
    studentId: number;
}