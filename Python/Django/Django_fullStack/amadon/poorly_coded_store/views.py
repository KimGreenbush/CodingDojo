from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    total_charge = int(request.POST["quantity"]) * int(Product.objects.get(id=float(request.POST["price"])).price)
    order = Order.objects.create(quantity_ordered=int(request.POST["quantity"]), total_price=total_charge)
    order_id = order.id
    return redirect("/order/%i" %order_id)

def order(request, order_id):
    combined_total = 0
    for order in Order.objects.all():
        combined_total += order.total_price
    context = {
        "order_details": Order.objects.get(id=order_id),
        "combined_total" : combined_total
    }
    return render(request, "store/checkout.html", context)
