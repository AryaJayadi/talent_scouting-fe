import { StudentCardProps } from './StudentCardProps';
import { VacancyResponse } from './CompanyVacancyProps';

export interface StudentRequestProps {
    jobApplyPK: StudentRequestPKProps;
    jobVacancy: VacancyResponse;
    student: StudentCardProps;
    status: string;
    notes: string;
    companyNote: string
}

export interface StudentRequestPKProps {
    jobVacancyId: number;
    studentId: number;
}