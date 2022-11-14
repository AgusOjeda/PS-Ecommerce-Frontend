export const SellCard = (order) => `
          <div class="shadow-lg p-4 bg-white">
            <div class="flex justify-between p-4">
              <div class="flex flex-col">
                <span class="text-[#6B7280] text-sm font-semibold">VENTAS TOTALES</span>
                <span class="text-2xl font-bold">${order.sales.length}</span>
              </div>
              <i class='bx bxs-package text-[#10B981] text-3xl'></i>
            </div>
          </div>
          <div class="shadow-lg p-4 bg-white">
            <div class="flex justify-between p-4">
              <div class="flex flex-col">
                <span class="text-[#6B7280] text-sm font-semibold">INGRESOS</span>
                <span class="text-2xl font-bold">$ ${order.totalRevenue}</span>
              </div>
              <i class='bx bx-money-withdraw text-[#10B981] text-3xl'></i>
            </div>
          </div>
        `
