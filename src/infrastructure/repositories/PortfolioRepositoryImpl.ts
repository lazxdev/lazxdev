import type { Portfolio } from "../../domain/entities/Portfolio";
import type { PortfolioRepository } from "../../domain/repositories/PortfolioRepository";
import type { TFunction } from "i18next";
import { getPortfolioData } from "../data/portfolioData";

export class PortfolioRepositoryImpl implements PortfolioRepository {
    constructor(private t: TFunction) {}

    getPortfolio(): Portfolio {
        return getPortfolioData(this.t);
    }
}
