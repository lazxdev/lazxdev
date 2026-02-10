import type { Portfolio } from "../../domain/entities/Portfolio";
import type { PortfolioRepository } from "../../domain/repositories/PortfolioRepository";
import { portfolioData } from "../data/portfolioData";

export class PortfolioRepositoryImpl implements PortfolioRepository {
    getPortfolio(): Portfolio {
        return portfolioData;
    }
}
