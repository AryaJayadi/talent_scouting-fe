import { CompanyCardProps } from './CompanyCardProps';

export interface CompanyVacancyProps {
    StopTime: Date;
    Title: String;
    Description: String;
    CompanyImage: string;
    VacancyId: number
    CompanyId: Number
}

export interface JobTypeProps {
    id: number;
    jobTypeName: string;
}

export interface VacancyResponse {
    company: CompanyCardProps;
    endDateTime: Date;
    id: number;
    jobDescription: string;
    jobPosition: string;
    jobType: JobTypeProps;
    location: string;
    salaryRange: string;
    timeStamp: Date;
    workTimeType: string
}

export interface CompanyVacancyWithApplyCountProps {
    jobVacancy: VacancyResponse;
    jobApplyCount: number;
}


export interface VacancyDetailResponse {
    jobVacancy: VacancyResponse;
    skills: Skills[];
    jobResponsibilities: Responsibility[];
    extrasInfo: ExtrasInfo[]
}

export interface ExtrasInfo {
    id: number;
    jobVacancy: VacancyResponse;
    extrasTitle: string;
    extrasDescription: string
}

export interface Responsibility {
    id: number;
    jobVacancy: VacancyResponse;
    responsibilityDetail: string;
}

export interface Skills {
    jobVacancySkillPK: SkillPK
    jobVacancy: VacancyResponse
    skill: Skill;
    skillDetail: string
}

export interface SkillPK {
    jobVacancyId: number;
    skillId: number
}

export interface Skill {
    id: number;
    skillName: string
}