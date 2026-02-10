import type { Portfolio } from "../../domain/entities/Portfolio";
import type { PortfolioRepository } from "../../domain/repositories/PortfolioRepository";

export const getPortfolio = (repository: PortfolioRepository): Portfolio => {
    return repository.getPortfolio();
};
